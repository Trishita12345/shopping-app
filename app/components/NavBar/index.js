/**
 *
 * NavBar
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import NavLink from '../NavLink';
// import styled from 'styled-components';

function NavBar({ itemCount, totalPrice }) {
  const navLinkList = ['SUITS', 'COATS', 'JACKETS', 'SHIRTS', 'SHOES'];
  const navLinkCol1 = navLinkList.map(element => (
    <NavLink key={element} label={element} />
  ));
  const cart = `${itemCount}ITEMS, $${totalPrice}.00`;
  return (
    <div>
      {navLinkCol1}
      <NavLink label={cart} />
      <NavLink label="Login/Register" />
    </div>
  );
}

NavBar.propTypes = {
  itemCount: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default memo(NavBar);
