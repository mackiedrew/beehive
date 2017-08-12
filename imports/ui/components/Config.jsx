// @flow

// Framework
import React from "react";

// Components
import { Container, Row, Col } from "reactstrap";
import FieldRows from "./FieldRows";

/**
 * A list of Configuration options
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {Element} Stateless functional React component.
 */
const Config = ({
  configFields = {},
  configSettingAction
}: {
  configFields: Fields,
  configSettingAction: ((label: string, value: InputValue) => void) | void
}): StatelessComponent =>
  <aside>
    <Container className="config" fluid>
      <Row>
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

export default Config;
