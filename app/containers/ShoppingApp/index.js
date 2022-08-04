/**
 *
 * ShoppingApp
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectShoppingApp from './selectors';
import reducer from './reducer';
import saga from './saga';
import { shoppingAppDisplayFunc } from './helperFunction';

export function ShoppingApp(props) {
  useInjectReducer({ key: 'shoppingApp', reducer });
  useInjectSaga({ key: 'shoppingApp', saga });

  return (
    <div>
      <Helmet>
        <title>ShoppingApp</title>
        {/* <meta name="description" content="Description of ShoppingApp" /> */}
      </Helmet>
      {shoppingAppDisplayFunc(props)}
    </div>
  );
}

// ShoppingApp.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  shoppingApp: makeSelectShoppingApp(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ShoppingApp);
