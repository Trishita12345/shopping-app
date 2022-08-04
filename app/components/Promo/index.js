/**
 *
 * Promo
 *
 */

import React from 'react';
import PromoTile from '../PromoTile';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Promo() {
  const promoList = [
    {
      title: 'NEW STUFF',
      heading: 'SUITS FOR GENTLEMAN',
      buttonLabel: 'MORE NEW SUITS',
    },
    {
      title: 'SALE',
      heading: 'ALL JACKETS 50% OFF',
      buttonLabel: 'SEE PRODUCTS',
    },
    {
      title: 'HOT',
      heading: 'OFFER FOR REAL MAN',
      buttonLabel: 'BE A REAL MAN',
    },
  ];
  const promos = promoList.map(promo => (
    <PromoTile
      key={promo.title}
      title={promo.title}
      heading={promo.heading}
      buttonLebel={promo.buttonLabel}
    />
  ));
  return <div>{promos}</div>;
}

Promo.propTypes = {};

export default Promo;
