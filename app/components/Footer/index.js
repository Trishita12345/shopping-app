/**
 *
 * Footer
 *
 */

import React from 'react';
import FooterTile from '../FooterTile';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Footer() {
  const footerList = [
    {
      label: 'ABOUT US',
      description:
        'Vero eos et accusamus et iusto dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti Quos dolores et quas molestias excepturi sint occaecati cupiditate.',
    },
    {
      label: 'CONTACT',
      description:
        'Elegantic Inc. 1041 Madison Ave, New York 45) 523 565 242 office@elegantic.com',
    },
  ];
  const footers = footerList.map(footer => (
    <FooterTile
      key={footer.label}
      label={footer.label}
      description={footer.description}
      isSocialTile={false}
    />
  ));
  return (
    <div>
      <div>
        <div>{footers}</div>
        <div>
          <FooterTile label="FOLLOW US" isSocialTile />
        </div>
      </div>
      <div>Copyright 2014 Elegantic. All rights reserved.</div>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
