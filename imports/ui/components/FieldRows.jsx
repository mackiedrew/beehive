// @flow

// Framework
import React from "react";

// Components
import { Container, Row, Col, Form } from "reactstrap";
import FieldRow from "./FieldRow";

/**
 * A list of field rows with a header.
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {Element} Stateless functional React component.
 */
const FieldRows = ({
  heading = "Fields",
  fields = {},
  stateSettingAction
}: {
  heading: string,
  fields: Fields,
  stateSettingAction: (event => void) | void
}): StatelessComponent =>
  <Container className="field-rows" fluid>
    <Row noGutters>
      <Col>
        <h3>
          {heading}
        </h3>
      </Col>
    </Row>
    <Row noGutters>
      <Col>
        <Form>
          {Object.keys(fields).map((label, i) =>
            <FieldRow
              key={i}
              label={label}
              value={fields[label]}
              stateSettingAction={stateSettingAction}
              visibleLabel
            />
          )}
        </Form>
      </Col>
    </Row>
  </Container>;

export default FieldRows;
