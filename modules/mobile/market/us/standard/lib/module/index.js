import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { internalRoutes } from './routes';
import { ThemeProvider } from './context/Theme/Theme';
import { theme as defaultTheme } from './constants/theme';
export const RootComponent = _ref => {
  let {
    secureRoutes = {},
    theme = defaultTheme
  } = _ref;
  const Stack = createNativeStackNavigator();
  const routes = Object.values({ ...internalRoutes,
    ...secureRoutes
  });
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(NavigationContainer, null, /*#__PURE__*/React.createElement(Stack.Navigator, {
    initialRouteName: "Home",
    screenOptions: {
      headerShown: false
    }
  }, routes.map(route => {
    return /*#__PURE__*/React.createElement(Stack.Screen, {
      key: JSON.stringify({
        route
      }),
      component: route.component,
      name: route.name
    });
  }))));
};
export * from './components';
export * from './screens';
export * from './types';
//# sourceMappingURL=index.js.map