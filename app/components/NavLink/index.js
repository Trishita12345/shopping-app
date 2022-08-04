/**
 *
 * NavLink
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function NavLink({ label }) {
  return (
    <span>
      <a href="www.google.com">{label}</a>
      &nbsp;&nbsp;&nbsp;&nbsp;
    </span>
  );
}

NavLink.propTypes = { label: PropTypes.string };

export default NavLink;
