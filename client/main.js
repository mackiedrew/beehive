// Framework
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

// Libraries
import 'bootstrap/dist/css/bootstrap.css';

// Components
import App from '../imports/ui/containers/App.jsx';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
