/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Image,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
/*const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};*/

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
//SafeAreaView is to render content within the safe area boundaries of a device.
// https://learn.microsoft.com/en-us/windows/dev-environment/javascript/react-native-for-android
const [text, setText] = useState('');
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={require('./assets/dog_img.png')} style={styles.image} />
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.row}>
            <Button color='#D3D3D3' title="Button"></Button>
            <Button color='#D3D3D3' title="Button"></Button>
          </View>
          <View style={styles.row}>
            <Button color='#D3D3D3' title="Button"></Button>
            <Button color='#D3D3D3' title="Button"></Button>
          </View>
        </View>

        <View style= {styles.emailContainer}>
          <View>
            <Text style={{marginVertical: 12}}>Email</Text>
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              onChangeText={(text) => setText(text)}
              defaultValue={text}
                  />
                </View>
              </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  image:{
    flex: 1,
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 80,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
    emailContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
      textInput: {
        borderBottomWidth: 1,
        height: 40,
        width: 200,
      },
});

export default App;
