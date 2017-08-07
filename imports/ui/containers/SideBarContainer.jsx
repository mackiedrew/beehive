// @flow

// Framework
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Actions to Bind
import setConfigValue from "../actions/setConfigValue";
import setSettingsValue from "../actions/setSettingsValue";

// Component to Contain
import SideBar from "../components/SideBar";

// Connect the STATE to the props fed into the component.
export const mapStateToProps = (state: StrictState): MappedStateToProps => {
  return {
    configFields: state.config,
    settingsFields: state.settings
  };
};

// Connect ACTIONS to the props fed into the component.
export const mapDispatchToProps = (
  dispatch: Dispatch
): MappedDispatchToProps => {
  return bindActionCreators(
    {
      configSettingAction: setConfigValue,
      settingsSettingAction: setSettingsValue
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
