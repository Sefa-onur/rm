import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './src/Main';
import Episode from './src/Episode';
import Character from './src/Character';

const Stack = createStackNavigator();

const App = () => {
   return(
     <NavigationContainer>
       <Stack.Navigator initialRouteName = 'Main' headerMode = 'none' >
         <Stack.Screen name = 'Main' component = {Main} />
         <Stack.Screen name = 'Episode' component = {Episode} />
         <Stack.Screen name = 'Character' component = {Character} />
       </Stack.Navigator>
     </NavigationContainer>
   )
}

export default App;