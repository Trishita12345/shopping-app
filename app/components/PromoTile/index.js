/**
 *
 * PromoTile
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function PromoTile({ title, heading, buttonLebel }) {
  return (
    <div>
      <div>
        <h4>{`- ${title} -`}</h4>
      </div>
      <div>
        <h1>{heading}</h1>
      </div>
      <div>
        <button type="submit" onClick={() => {}}>
          {buttonLebel}
        </button>
      </div>
    </div>
  );
}

PromoTile.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  buttonLebel: PropTypes.string,
};

export default PromoTile;
