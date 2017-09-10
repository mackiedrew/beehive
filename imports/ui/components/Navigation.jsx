// @flow

// Framework
import React from "react";

// Components
import { Container, Row, Col } from "reactstrap";
import NavigationItem from "./NavigationItem";

/**
 * A list of field rows with a header.
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {Element} Stateless functional React component.
 */
const Navigation = ({
  navigationItems
}: {
  navigationItems: Array<StatefulLink>
}): StatelessComponent =>
  <nav className="navigation">
    <Container fluid>
      <Row>
        {navigationItems.map(({ label, path }, i) =>
          <Col className="text-center p-1" key={`nav-item-${label}-${i}`}>
            {/*<NavigationItem label={label} path={path} />*/}
            {label}
          </Col>
        )}
      </Row>
    </Container>
  </nav>;

export default Navigation;
