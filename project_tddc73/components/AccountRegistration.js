import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  TextInput,
  useColorScheme,
  View,
  Alert,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

import CheckBox from '@react-native-community/checkbox';

import React, { useState } from 'react';

import Captcha from './Captcha';

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

const AccountRegistration = ({navigation}) => {

      const [state, setState] = useState(initialState);

      const onUpdateState = (keyName, value) => {
        setState({
          ...state,
          [keyName]: value,
        });
      };

    const [focusName, setFocusName] = useState(false);
    const [focusUserName, setFocusUserName] = useState(false);
    const [focusPassword, setFocusPassword] = useState(false);
    const [focusBirth, setFocusBirth] = useState(false);
    const [focusEmail, setFocusEmail] = useState(false);

    //checkbox
    const [checkBoxState, setCheckBoxState] = useState(false);

    const resetValues = () => {

    if (state.fullName.trim() === "") {
                Alert.alert('Full name required');
    } else if (state.email.trim() === "") {
                Alert.alert('Email required');
    } else if (state.email.indexOf("@") <= 0){ // if @ does not exist, indexOf returns -1
               Alert.alert('Email must include a @');
    } else if(state.userName.trim() === "") {
                Alert.alert('Username required');
    } else if (state.password.trim() === "") {
                Alert.alert('Password required');
    } else {
                navigation.navigate("Next", {});
    }
    }

    return (
    <View style={styles.textContainer}>
         <Text style={styles.textStyle}>Full Name</Text>
                <View style={styles.row}>
                <TextInput
                     style={focusName ? styles.inputFormOnFocus : styles.inputFormOnBlur}
                     onFocus={() => setFocusName(true) }
                     onBlur={() => setFocusName(false) }
                     onChangeText={(text) => onUpdateState('fullName', text)}
                     Value={state.fullName}
                />
              <Text style={{color: 'red', fontSize: 20}}>*</Text>
              </View>
              <Text style={styles.textStyle}>E-mail</Text>
              <View style={styles.row}>
                     <TextInput
                          style={focusEmail ? styles.inputFormOnFocus : styles.inputFormOnBlur}
                          onFocus={() => setFocusEmail(true) }
                          onBlur={() => setFocusEmail(false) }
                          onChangeText={(text) => onUpdateState('email', text)}
                          Value={state.email}
                     />
             <Text style={{color: 'red', fontSize: 20}}>*</Text>
              </View>
              <Text style={styles.textStyle}>Username</Text>
                    <View style={styles.row}>
                     <TextInput
                          style={focusUserName ? styles.inputFormOnFocus : styles.inputFormOnBlur}
                          onFocus={() => setFocusUserName(true) }
                          onBlur={() => setFocusUserName(false) }
                          onChangeText={(text) => onUpdateState('userName', text)}
                          Value={state.userName}
                     />
                     <Text style={{color: 'red', fontSize: 20}}>*</Text>
                     </View>
              <Text style={styles.textStyle}>Password</Text>

              <View style={styles.row}>
                     <TextInput
                          style={focusPassword ? styles.inputFormOnFocus : styles.inputFormOnBlur}
                          onFocus={() => setFocusPassword(true) }
                          onBlur={() => setFocusPassword(false) }
                          onChangeText={(text) => onUpdateState('password', text)}
                          Value={state.password}
                     />
                     <Text style={{color: 'red', fontSize: 20}}>*</Text>
                     </View>
         <Text style={styles.textStyle}>Gender</Text>
                <View style={styles.pickerView}>
                <Picker
                    selectedValue={state.gender}
                    style={styles.pickerStyle}
                    onValueChange={(itemValue, itemIndex) => onUpdateState('gender', itemValue)}>
                    <Picker.Item label="Prefer not to say" value="Prefer" />
                    <Picker.Item label="Female" value="F" />
                    <Picker.Item label="Male" value="M" />
                    <Picker.Item label="Non-binary" value="Non" />
                </Picker>
                </View>

            <Text style={styles.textStyle}>Birthdate</Text>
                <View style={styles.row}>
                        <TextInput
                             placeholder="DD"
                             style={focusBirth ? styles.inputBirthOnFocus : styles.inputBirthOnBlur}
                             onFocus={() => setFocusBirth(true) }
                             onBlur={() => setFocusBirth(false) }
                             onChangeText={(text) => onUpdateState('day', text)}
                             Value={state.day}
                             maxLength = {2}
                        />
                        <Text>/</Text>
                        <TextInput
                             placeholder="MM"
                             style={focusBirth ? styles.inputBirthOnFocus : styles.inputBirthOnBlur}
                             onFocus={() => setFocusBirth(true) }
                             onBlur={() => setFocusBirth(false) }
                             onChangeText={(text) => onUpdateState('month', text)}
                             Value={state.month}
                             maxLength = {2}
                        />
                        <Text>/</Text>
                        <TextInput
                             placeholder={'YYYY'}
                             style={focusBirth ? styles.inputBirthOnFocus : styles.inputBirthOnBlur}
                             onFocus={() => setFocusBirth(true) }
                             onBlur={() => setFocusBirth(false) }
                             onChangeText={(text) => onUpdateState('year', text)}
                             Value={state.year}
                             maxLength = {4}
                        />
                </View>
                <View style={styles.row}>
                    <CheckBox
                      value={checkBoxState}
                      onValueChange={setCheckBoxState}
                      style={styles.checkbox}/>
                    <Text style={styles.label}>Do you approve of our Terms and conditions?</Text>
                    <Text style={{color: 'red', fontSize: 20}}>*</Text>
                </View>
                <Button title="Next step" onPress={() => resetValues()} />

    </View>
    );
}

 const styles = StyleSheet.create({
    textContainer: {
        backgroundColor: '#ffffff',
        flex: 1,
        paddingTop: 25,
        marginLeft: 5,
        marginRight: 10,
          },
    textStyle: {
        fontSize: 14,
        padding: 6,
        margin: 3
    },
    pickerView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 65,
        marginLeft: 30,
    },
    pickerStyle: {
        height: 50,
        width: 200,
        marginLeft: 65,
    },
    inputFormOnFocus: {
        height: 45,
        width: 180,
        margin: 10,
        padding: 12,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        backgroundColor: '#bfd9c0',
    },
    inputFormOnBlur: {
        height: 45,
        width: 180,
        margin: 10,
        padding: 12,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        backgroundColor: '#e3e3e3',
    },
    inputBirthOnFocus: {
        height: 45,
        width: 70,
        margin: 10,
        padding: 12,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        backgroundColor: '#bfd9c0',
    },
    inputBirthOnBlur: {
        height: 45,
        width: 70,
        margin: 10,
        padding: 12,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        backgroundColor: '#e3e3e3',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
      checkbox: {
        alignSelf: "center",
      },
      label: {
        margin: 8,
      },
 });

export default AccountRegistration;