/**
 *
 * NewsLetter
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function NewsLetter() {
  return (
    <div>
      <div>
        <div>
          <h1>NEWSLETTER</h1>
        </div>
        <div>JOIN TO RECEIVE PROMOTIONS AND OTHER GOOD NEWS.</div>
      </div>
      <div>
        <div>
          <input type="text" placeholder="YOUR EMAIL" />
        </div>
        <div>
          <button type="submit" onClick={() => {}}>
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
}

NewsLetter.propTypes = {};

export default NewsLetter;
