// @flow

// Framework
import React from "react";

// Components
import { Container, Row, Col, Button } from "reactstrap";
import SideBarContainer from "../containers/SideBarContainer";
import GameContainer from "../containers/GameContainer";

/**
 * Homepage for the app!
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {StatelessComponent} Stateless functional React component.
 */
const Home = ({
  toggleSideBar,
  sideBarOpen
}: {
  toggleSideBar: () => void,
  sideBarOpen: boolean
}): StatelessComponent =>
  <Container className="px-0" fluid>
    <Row>
      <Col>
        <Button onClick={() => toggleSideBar()}>Toggle Sidebar</Button>
      </Col>
    </Row>
    <Row>
      {sideBarOpen &&
        <Col>
          <SideBarContainer />
        </Col>}
      <Col>
        <GameContainer />
      </Col>
    </Row>
  </Container>;

export default Home;
