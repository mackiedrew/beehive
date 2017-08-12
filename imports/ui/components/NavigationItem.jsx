// @flow

// Framework
import React from "react";
import { Link } from "react-router-dom";

/**
 * A single navigation item.
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {Element} Stateless functional React component.
 */
const NavigationItem = ({
  label = "Home",
  path = "/"
}: {
  label: string,
  path: string
}): StatelessComponent =>
  <Link className="navigation-item" to={path}>
    {label}
  </Link>;

export default NavigationItem;
