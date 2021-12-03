'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.internalRoutes = void 0;

var _Home = require('../screens/Home/Home');

var _screens = require('../screens');

var _Amount = require('../screens/Amount/Amount');

var _When = require('../screens/When/When');

var _Review = require('../screens/Review/Review');

var _Alert = require('../screens/Alert/Alert');

const internalRoutes = {
  Home: {
    name: 'Home',
    component: _Home.Home,
  },
  PayFrom: {
    name: 'PayFrom',
    component: _screens.PayFrom,
  },
  PayTo: {
    name: 'PayTo',
    component: _screens.PayTo,
  },
  Amount: {
    name: 'Amount',
    component: _Amount.Amount,
  },
  When: {
    name: 'When',
    component: _When.When,
  },
  Review: {
    name: 'Review',
    component: _Review.Review,
  },
  Alert: {
    name: 'Alert',
    component: _Alert.Alert,
  },
};
exports.internalRoutes = internalRoutes;
//# sourceMappingURL=index.js.map
