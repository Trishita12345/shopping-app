import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the shoppingApp state domain
 */

const selectShoppingAppDomain = state => state.shoppingApp || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ShoppingApp
 */

const makeSelectShoppingApp = () =>
  createSelector(
    selectShoppingAppDomain,
    substate => substate,
  );

export default makeSelectShoppingApp;
export { selectShoppingAppDomain };
