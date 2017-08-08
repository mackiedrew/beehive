// @flow

// Framework
import React from "react";

// Components
import { Container, Row, Col } from "reactstrap";
import FieldRows from "./FieldRows";

/**
 * A list of field rows with a header.
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {Element} Stateless functional React component.
 */
const SideBar = ({
  settingsFields = {},
  configFields = {},
  settingsSettingAction,
  configSettingAction
}: {
  settingsFields: Fields,
  configFields: Fields,
  settingsSettingAction: ((label: string, value: InputValue) => void) | void,
  configSettingAction: ((label: string, value: InputValue) => void) | void
}): StatelessComponent =>
  <aside>
    <Container className="sidebar" fluid>
      <Row noGutters>
        <Col>
          <FieldRows
            heading="Settings"
            fields={settingsFields}
            stateSettingAction={settingsSettingAction}
          />
        </Col>
      </Row>
      <Row noGutters>
        <Col>
          <FieldRows
            heading="Configuration"
            fields={configFields}
            stateSettingAction={configSettingAction}
          />
        </Col>
      </Row>
    </Container>
  </aside>;

export default SideBar;
