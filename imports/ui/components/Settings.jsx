// @flow

// Framework
import React from "react";

// Components
import { Container, Row, Col } from "reactstrap";
import FieldRows from "./FieldRows";

/**
 * A list of settings.
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {Element} Stateless functional React component.
 */
const Settings = ({
  settingsFields = {},
  settingsSettingAction
}: {
  settingsFields: Fields,
  settingsSettingAction: ((label: string, value: InputValue) => void) | void
}): StatelessComponent =>
  <aside>
    <Container className="settings" fluid>
      <Row noGutters>
        <Col>
          <FieldRows
            heading="Settings"
            fields={settingsFields}
            stateSettingAction={settingsSettingAction}
          />
        </Col>
      </Row>
    </Container>
  </aside>;

export default Settings;
