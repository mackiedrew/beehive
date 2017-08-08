// @flow

// Framework
import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import { Container, Row, Col, Button } from "reactstrap";
import HomeContainer from "../containers/HomeContainer";
import NotFound from "../components/NotFound";

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
    <Row noGutters>
      <Col>
        <main>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
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
