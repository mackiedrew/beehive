// @flow

// Framework
import React from "react";

// Components
import { Container, Row, Col, FormGroup, Label, Input } from "reactstrap";

// Helpers
import { camelCaseToTitle } from "../helpers/text";

// Types
type InputValue = string | boolean | number;

/**
 * A single input field for a boolean, string or number.
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {Element} Stateless functional React component.
 */
const FieldRow = ({
  label = "Field",
  value,
  visibleLabel = true,
  stateSettingAction
}: {
  label: string,
  value: InputValue,
  stateSettingAction: ((label: string, value: InputValue) => void) | void,
  visibleLabel: boolean | void
}): StatelessComponent => {
  const inputId: string = `${label}-${typeof value}-field-row-input`;
  const titleLabel: string = camelCaseToTitle(label);
  const labelClass: string = visibleLabel ? "" : "sr-only";
  const onChange: Event => void = ({ target: { value } }) =>
    stateSettingAction(label, value);
  return (
    <FormGroup className="field-row">
      <Label className={labelClass} for={inputId}>
        {titleLabel}
      </Label>
      <Input
        type="text"
        placeholder={titleLabel}
        name={inputId}
        id={inputId}
        onChange={onChange}
        value={value}
      />
    </FormGroup>
  );
};

export default FieldRow;
