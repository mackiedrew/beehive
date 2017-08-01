// @flow

// Framework
import type React, { Element } from 'react';

// Components
import { Container, Row, Col } from 'reactstrap';

/**
 * Main rendering entry point for the app.
 *
 * @returns {Element} Stateless functional React component.
 */
const App = (): Element<*> => (
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
        <main className="bg-success">
          <p>Main!</p>
        </main>
      </Col>
    </Row>
    <Row>
      <Col>
        <footer className="py-1 text-center">
          <p>Created by: <a href="https://mackiedrew.com/">Mackie Drew</a></p>
        </footer>
      </Col>
    </Row>
  </Container>
);

export default App;
