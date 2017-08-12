// @flow

// Framework
import React from "react";
import { Switch, Route, Link } from "react-router-dom";

// Components
import { Container, Row, Col, Button } from "reactstrap";
import Navigation from "../components/Navigation";

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
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/config" component={ConfigContainer} />
            <Route exact path="/settings" component={SettingsContainer} />
            <Route path="*" component={NotFound} />
          </Switch>
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
