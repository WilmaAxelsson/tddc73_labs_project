import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Picker,
} from '@react-native-picker/picker';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import FormCard from './components/FormCard';
import ShowCard from './components/ShowCard';

 const initialState = {
    cardNumber: '#### #### #### ####',
    cardHolder: 'AD SOYAD',
    cardMonth: 'MM',
    cardYear: 'YY',
    cardCvv: '',
    isCardFlipped: false,
  };


const App = () => {

  const [state, setState] = React.useState(initialState);

  const updateState = (keyName, value) => {
    setState({
      ...state,
      [keyName]: value,
    });
  };

  return (
    <View style={styles.container}>
        <View style={styles.cardContainer}>
            <ShowCard state={state}/>
        </View>
        <View style={styles.formContainer}>
            <FormCard state={state} onUpdateState={updateState} />
        </View>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    flexDirection: "column",
    justifyContent: 'flex-start',
  },
  formContainer: {
    flex: 5,
  },
  cardContainer: {
    flex: 4,
    padding: 10,
  },
});

export default App;
