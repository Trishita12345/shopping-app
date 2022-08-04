/**
 *
 * Asynchronously loads the component for ShoppingApp
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
