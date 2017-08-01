// @flow

// Framework
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions to Bind
import fakeToggleAction from '../actions/fakeToggle';

// Component to Contain
import Home from '../components/Home';

// Connect the STATE to the props fed into the component.
export const mapStateToProps = (state: StrictState): MappedStateToProps => {
  return {
    fakeValue: state.ui.fakeValue,
  };
};

// Connect ACTIONS to the props fed into the component.
export const mapDispatchToProps = (dispatch: Dispatch): MappedDispatchToProps => {
  return bindActionCreators(
    {
      fakeToggle: fakeToggleAction,
    },
    dispatch,
  );
};

// Create higher-order component which feeds in specified props.
const HomeContainer: StatelessComponent = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
