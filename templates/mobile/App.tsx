import React from 'react';
import {View} from 'react-native';
import {ExampleComponent} from '@pab-source/lib-mobile-components';
import {theme} from '@pab-source/lib-shared-themes';

//thats great!
const App = () => (
  <View style={{flex: 1, backgroundColor: theme.global.color.primary}}>
    <ExampleComponent />
  </View>
);

export default App;
