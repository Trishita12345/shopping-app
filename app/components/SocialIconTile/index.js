/**
 *
 * SocialIconTile
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function SocialIconTile({ imgSrc, label }) {
  return (
    <div>
      <div>
        <img src={imgSrc} alt="" />
      </div>
      <div>{label}</div>
    </div>
  );
}

SocialIconTile.propTypes = {
  imgSrc: PropTypes.string,
  label: PropTypes.string,
};

export default SocialIconTile;
