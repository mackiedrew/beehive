// @flow

// Framework
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Action Creators to Bind
import createBee from "../actionCreators/bees/createBee";

// Component to Contain
import Game from "../components/Game";

// Connect the STATE to the props fed into the component.
export const mapStateToProps = (state: StrictState): MappedStateToProps => {
  return {
    bees: state.bees.bees
  };
};

// Connect ACTIONS to the props fed into the component.
export const mapDispatchToProps = (
  dispatch: Dispatch
): MappedDispatchToProps => {
  return bindActionCreators(
    {
      createBee: createBee
    },
    dispatch
  );
};

// Create higher-order component which feeds in specified props.
const GameContainer: StatelessComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default GameContainer;
