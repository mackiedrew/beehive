// @flow

// Framework
import { Meteor } from "meteor/meteor";

/**
 * This helper allows the usage of promise or async/await syntax with Meteor methods on the
 * frontend. It's primary usage is to be plugged into an async generator's yeild in a Redux saga.
 * But can be used in place of any Meteor.call().
 *
 * @param  {[type]} methodName The simple string text key representing a Meteor method.
 * @param  {Object} callValues An object containing all the values to be passed to the Meteor
 * method. This is intentionally only a single value
 * @return {Promise<*>} A promise resolving or rejecting based on the specified Meteor method.
 */
export const meteorPromise = (
  methodName: string = "",
  callValues: Object = {}
): Promise<any> => {
  const promiseScaffold = (resolve: Function, reject: Function) => {
    if (methodName === "") {
      reject(
        new Meteor.Error(
          "ui.helpers.meteorPromise.noMethodSpecified",
          "You need to have a method name for a Meteor method to be called."
        )
      );
    }
    return Meteor.call(methodName, callValues, (error, response) => {
      if (error) {
        reject(error);
      }
      resolve(response);
    });
  };
  const promisedCall: Promise<any> = new Promise(promiseScaffold);
  return promisedCall;
};

export default meteorPromise;
