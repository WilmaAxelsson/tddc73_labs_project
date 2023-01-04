import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import AccountRegistration from './components/AccountRegistration';
import Captcha from './components/Captcha';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const screenOptions = {
    headerStyle: {backgroundColor: 'black'},
    headerTintColor: 'white',
}

const App = ()  => {

  return (
            <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                        <Stack.Screen
                            name="Home"
                            component={AccountRegistration}
                            options= {{ title: 'Register your account!'}}
                            />
                        <Stack.Screen
                            name="Next"
                            component={Captcha}
                            options= {{ title: 'Prove you are not a robot'}}
                            />
                    </Stack.Navigator>
                    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
    container: {
    margin: 10,
    },
});

export default App;
