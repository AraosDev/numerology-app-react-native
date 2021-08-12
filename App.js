import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Calculator from './app/Pages/Calculator';
import HowTo from './app/Pages/HowTo';
import Significance from './app/Pages/Significance';

const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Calculator" barStyle={{backgroundColor: '#737373'}}
      >
        <Tab.Screen
          name="Calculator"
          component={Calculator}
          options={{
            tabBarLabel: 'Calculator',
            tabBarIcon: () => (
              <Image source={require('./app/Assets/calculator.jpg')} style={{width:20,height:20}} />
            ),
          }}
        />
        <Tab.Screen
          name="HowTO"
          component={HowTo}
          options={{
            tabBarLabel: 'How To Calculate',
            tabBarIcon: () => (
              <Image source={require('./app/Assets/howto.png')} style={{width:20,height:20}} />
            )
          }}
        />
        <Tab.Screen
          name="Significance"
          component={Significance}
          options={{
            tabBarLabel: 'Numbers\' Significance',
            tabBarIcon: () => (
              <Image source={require('./app/Assets/significance.png')} style={{width:20,height:20}} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
