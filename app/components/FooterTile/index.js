/**
 *
 * FooterTile
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import SocialIconTile from '../SocialIconTile';
// import styled from 'styled-components';

function FooterTile({ label, description, isSocialTile }) {
  const socialIconsList = [
    { src: '', label: 'FACEBOOK' },
    { src: '', label: 'GOOGLE+' },
    { src: '', label: 'TWITTER' },
    { src: '', label: 'PINTEREST' },
  ];
  const socialIcons = socialIconsList.map(icon => (
    <SocialIconTile key={icon.label} imgSrc={icon.src} label={icon.label} />
  ));
  const desc =
    isSocialTile === true ? <div>{socialIcons}</div> : <div>{description}</div>;
  return (
    <div>
      <div>
        <h3>{label}</h3>
      </div>
      {desc}
    </div>
  );
}

FooterTile.propTypes = {
  label: PropTypes.string,
  description: PropTypes.string,
  isSocialTile: PropTypes.bool,
};

export default FooterTile;
