// @flow

// Framework
import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";
import { Factory } from "meteor/dburles:factory";

class BeesCollection extends Mongo.Collection {
  insert(bee: Bee, callback: Function): string {
    // How many bee documents exist?
    const beesCursor = Bees.find({});
    const numberOfBees: number = beesCursor.count();
    const newNumberOfBees: number = numberOfBees + 1;
    // What should the name of the new bee be?
    const beeName = bee.name ? bee.name : `Bee #${newNumberOfBees}`;
    // What will the final state of the new bee object be?
    const alteredBee = { ...bee, name: beeName };
    // What is the id of the new bee object?
    const result = super.insert(alteredBee, callback);
    return result;
  }
}

export const Bees = new BeesCollection("Bees");

export default Bees;
