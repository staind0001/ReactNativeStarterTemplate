import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { Navigator } from './src/Navigator/Navigator';
import { ThemeProvider } from 'react-native-elements';
import { Tabs } from './src/Navigator/Tabs';



export const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
      {/* <Navigator /> */}
      <Tabs />
      </ThemeProvider>
    </NavigationContainer>
  )
}
export default App;
