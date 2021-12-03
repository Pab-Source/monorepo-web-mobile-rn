import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { internalRoutes } from './routes';
import { ThemeProvider } from './context/Theme/Theme';
import { theme as defaultTheme } from './constants/theme';
import type { IRootComponent, RootStackParamList, Screens } from './types';

export const RootComponent: React.FC<IRootComponent> = ({
  secureRoutes = {},
  theme = defaultTheme,
}) => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const routes = Object.values({
    ...internalRoutes,
    ...secureRoutes,
  });

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          {routes.map((route) => {
            return (
              <Stack.Screen
                key={JSON.stringify({ route })}
                component={route.component}
                name={route.name as Screens}
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export * from './components';
export * from './screens';
export * from './types';
