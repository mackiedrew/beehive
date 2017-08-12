// @flow

// Framework
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Actions to Bind
import createBeeRequest from "../actionCreators/bees/createBeeRequest";
import removeAllBeesRequest from "../actionCreators/bees/removeAllBeesRequest";

// Selectors
import getNumberOfBees from "../selectors/bees/getNumberOfBees";

// Component to Contain
import SideBar from "../components/SideBar";

// Connect the STATE to the props fed into the component.
export const mapStateToProps = (state: StrictState): MappedStateToProps => {
  return {
    numberOfBees: getNumberOfBees(state)
  };
};

// Connect ACTIONS to the props fed into the component.
export const mapDispatchToProps = (
  dispatch: Dispatch
): MappedDispatchToProps => {
  return bindActionCreators(
    {
      createBee: createBeeRequest,
      removeAllBees: removeAllBeesRequest
    },
    dispatch
  );
};

// Create higher-order component which feeds in specified props.
const SideBarContainer: StatelessComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);

export default SideBarContainer;
