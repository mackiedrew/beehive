// Framework
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import configureStore from "../imports/ui/store/configureStore";

// Libraries
import 'bootstrap/dist/css/bootstrap.css';

// Components
import AppContainer from '../imports/ui/containers/AppContainer.jsx';

// Make redux initial store
const store = configureStore();

// Actual Rendering Function
const renderApp = () => render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('render-target'),
);

// Start App
Meteor.startup(() => {
  renderApp();
});
