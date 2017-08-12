// @flow

// Framework
import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";
import { ValidatedMethod } from "meteor/mdg:validated-method";
import { DDPRateLimiter } from "meteor/ddp-rate-limiter";

// Libraries
import _ from "underscore";

// Collections
import { Bees } from "./collection";

export const fetchAllForUser = new ValidatedMethod({
  name: "bees.fetchAllForUser",
  validate: null,
  run() {
    const allBeesForUserCursor = Bees.find({ userId: this.userId });
    const allBeesForUser = allBeesForUserCursor.fetch();
    return allBeesForUser;
  }
});

export const insert = new ValidatedMethod({
  name: "bees.insert",
  validate: null,
  run() {
    try {
      const newBee = {
        ...bee,
        userId: this.userId
      };
      const result = Bees.insert(newBee);
      return result;
    } catch (error) {
      const newError = new Meteor.Error(
        "InsertBeesError",
        "Could not insert a new bee.",
        error
      );
      console.error(newError);
      throw newError;
    }
  }
});

export const updateName = new ValidatedMethod({
  name: "bees.updateName",
  validate: new SimpleSchema({
    beeId: { type: String },
    newName: { type: String }
  }).validator(),
  run({ beeId, newName }) {
    const bee = Bees.findOne(beeId);

    if (!bee.editableBy(this.userId)) {
      throw new Meteor.Error(
        "api.bees.updateName.accessDenied",
        "You don't have permission to edit this bee."
      );
    }

    Bees.update(beeId, {
      $set: { name: newName }
    });
  }
});

export const remove = new ValidatedMethod({
  name: "bees.remove",
  validate: new SimpleSchema({
    beeId: { type: String }
  }).validator(),
  run({ beeId }) {
    const bee = Bees.findOne(beeId);

    if (!bee.editableBy(this.userId)) {
      throw new Meteor.Error(
        "api.bees.remove.accessDenied",
        "You don't have permission to remove this list."
      );
    }

    return Bees.remove(beeId);
  }
});

const BEES_METHODS = _.pluck(
  [insert, updateName, remove, fetchAllForUser],
  "name"
);

if (Meteor.isServer) {
  DDPRateLimiter.addRule(
    {
      name: name => _.contains(BEES_METHODS, name),
      connectionId: () => true
    },
    50, // Operations per limiting interval
    1000 // Limiting interval
  );
}
