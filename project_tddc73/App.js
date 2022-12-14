/* Account registration
*/
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

 const initialState = {
    fullName: '',
    userName: '',
    email: '',
    gender: '',
    password: '',
    month: '',
    day: '',
    year: ''
  };

const App = ()  => {

  const [state, setState] = useState(initialState);

  const updateState = (keyName, value) => {
    setState({
      ...state,
      [keyName]: value,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
    <AccountRegistration state={state} onUpdateState={updateState}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    margin: 50,
    },
});

export default App;
