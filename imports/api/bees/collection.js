// @flow

// Framework
import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";
import { Factory } from "meteor/dburles:factory";

class BeesCollection extends Mongo.Collection {
  insert(bee, callback) {
    // What will the bees name be? Especially if one is not specified.
    const beeName = bee.name ? bee.name : Lists.find(bees).count() + 1;
    // What will the final state of the new bee object be?
    const alteredBee = {
      ...bee,
      name: beeName
    };
    const result = super.insert(alteredBee, callback);
    return result;
  }
}

export const Bees = new BeesCollection("Bees");

export default Bees;
