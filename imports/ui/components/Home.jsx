// @flow

// Framework
import React from "react";

// Components
import { Container, Row, Col, Button } from "reactstrap";
import SideBarContainer from "../containers/SideBarContainer";

/**
 * Homepage for the app!
 *
 * @returns {StatelessComponent} Stateless functional React component.
 */
const Home = ({
  fakeValue,
  fakeToggle
}: {
  fakeValue: boolean,
  fakeToggle: () => void
}): StatelessComponent =>
  <Container fluid>
    <Row noGutters>
      <Col>
        <h2>Homepage</h2>
        <Button onClick={fakeToggle}>
          State: {String(fakeValue)}
        </Button>
        <SideBarContainer />
      </Col>
    </Row>
  </Container>;

export default Home;
