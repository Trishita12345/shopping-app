/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
import Logo from '../Logo';
import NavBar from '../NavBar';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Header() {
  return (
    <div>
      <Logo />
      <NavBar itemCount={2} totalPrice={599.0} />
    </div>
  );
}

Header.propTypes = {};

export default memo(Header);
