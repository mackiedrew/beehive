// @flow

// Framework
import React from "react";
import { Route, Link } from "react-router";
import { ConnectedRouter } from 'react-router-redux'

// Components
import { Container, Row, Col, Button } from "reactstrap";
import Navigation from "../components/Navigation";

import { history } from "../configureStore";

import HomeContainer from "../containers/HomeContainer";
import ConfigContainer from "../containers/ConfigContainer";
import SettingsContainer from "../containers/SettingsContainer";
import NotFound from "../components/NotFound";



const navigationItems: Array<StatefulLink> = [
  { label: "Game", path: "/" },
  { label: "Settings", path: "/settings" },
  { label: "Config", path: "/config" }
];

/**
 * Main rendering entry point for the app.
 *
 * @returns {Element} Stateless functional React component.
 */
const AppLayout = ({
  children
}: {
  children: StatelessComponent
}): StatelessComponent =>
  <Container className="app px-0" fluid>
    <Row className="bg-faded">
      <Col>
        <header className="py-4 text-center">
          <h1>Beehive Simulator</h1>
        </header>
      </Col>
    </Row>
    <Row className="bg-faded">
      <Col>
        <Navigation navigationItems={navigationItems} />
      </Col>
    </Row>
    <Row noGutters>
      <Col>
        <main>
          <ConnectedRouter history={history}>
            <div>
              <Route exact path="/" component={HomeContainer} />
              <Route exact path="/config" component={ConfigContainer} />
              <Route exact path="/settings" component={SettingsContainer} />
              <Route path="*" component={NotFound} />
            </div>
          </ConnectedRouter>
        </main>
      </Col>
    </Row>
    <Row>
      <Col>
        <footer className="py-1 text-center">
          <p>
            Created by: <a href="https://mackiedrew.com/">Mackie Drew</a>
          </p>
        </footer>
      </Col>
    </Row>
  </Container>;

export default AppLayout;
