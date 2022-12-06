import React from 'react';
import type {Node} from 'react';

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

import {
  Picker,
} from '@react-native-picker/picker';

const formCard = ({state, onUpdateState}) => {

      const [cardNrText, setCardNumber] = React.useState('');
      const [cardNameText, setCardName] = React.useState('');
      const [cardCVVText, setCardCVV] = React.useState('');

    // States for changing border color when box is focused
      const [isCardNrFocused, setCardNrFocused] = React.useState(false);
      const [isCardNameFocused, setCardNameFocused] = React.useState(false);
      const [isCardCVVFocused, setCardCVVFocused] = React.useState(false);


    const onCardNumberChange = (text, name) => {
        let cardNumber = text;
        text = text.replace(/[^0-9.]/g, ''); //Replace everything except numbers
        cardNumber = text.replace(/(.{4})/g, '$1 '); //Space between every fourth number
        setCardNumber(text);
        onUpdateState(name, cardNumber);
    };

    const onCVVNumberChange = () => {
        setCardCVVFocused(true);
        onUpdateState('isCardFlipped', true);
    };

    const onCVVNumberChangeEnd = () => {
        setCardCVVFocused(false);
        onUpdateState('isCardFlipped', false);
    };

    const resetCard = () => {
        Alert.alert('Card Submitted!')
/*        onUpdateState('cardHolder', 'Ad Soyad');
        onUpdateState('cardNumber', '#### #### #### ####');
        onUpdateState('cardMonth', 'MM');
        onUpdateState('cardYear', 'YY');
        onUpdateState('cardCvv', '');
        */
    };

    return(
    <View elevation={8} style={styles.textFormContainer}>
            <Text style={styles.textContainer}>Card Number</Text>
            <TextInput
                onFocus={() => setCardNrFocused(true)}
                onSubmitEditing={() => setCardNrFocused(false)}
                onEndEditing={() => setCardNrFocused(false)}
                style={[styles.textInput, {
                borderColor: isCardNrFocused == true ? 'blue' : 'black',}]}
                onChangeText={(text) => onCardNumberChange(text, 'cardNumber')}
                maxLength={16}
                Value={cardNrText}

            />
            <Text style={styles.textContainer}>Card Name</Text>
            <TextInput
                 onFocus={() => setCardNameFocused(true)}
                 onSubmitEditing={() => setCardNameFocused(false)}
                 onEndEditing={() => setCardNameFocused(false)}
                 style={[styles.textInput, {
                                 borderColor: isCardNameFocused == true ? 'blue' : 'black',}]}
                 onChangeText={(text) => onUpdateState('cardHolder', text)}
                 Value={state.cardName}
            />
        <View style={styles.row}>
        <Text style={styles.textContainer}>Expiration Date</Text>

        <Text style={styles.textContainerCVV}>CVV</Text>
        </View>
        <View style={styles.row}>
        <View style={styles.pickerViewStyle}>
        <Picker
                selectedValue={state.cardMonth}
                style={styles.pickerStyle}
                onValueChange={(itemValue, itemIndex) => onUpdateState('cardMonth', itemValue)}>
                <Picker.Item label="Month" value="0" />
                <Picker.Item label="01" value="01" />
                <Picker.Item label="02" value="02" />
                <Picker.Item label="03" value="03" />
                <Picker.Item label="04" value="04" />
                <Picker.Item label="05" value="05" />
                <Picker.Item label="06" value="06" />
                <Picker.Item label="07" value="07" />
                <Picker.Item label="08" value="08" />
                <Picker.Item label="09" value="09" />
                <Picker.Item label="10" value="10" />
                <Picker.Item label="11" value="11" />
                <Picker.Item label="12" value="12" />
            </Picker>
            </View>
            <View style={styles.pickerViewStyle}>
            <Picker
                selectedValue={state.cardYear}
                style={styles.pickerStyle}
                onValueChange={(itemValue, itemIndex) => onUpdateState('cardYear', itemValue)}>
                <Picker.Item label="Year" value="0" />
                <Picker.Item label="2019" value="2019" />
                <Picker.Item label="2020" value="2020" />
                <Picker.Item label="2021" value="2021" />
                <Picker.Item label="2022" value="2022" />
                <Picker.Item label="2023" value="2023" />
                <Picker.Item label="2024" value="2024" />
                <Picker.Item label="2025" value="2025" />
                <Picker.Item label="2026" value="2026" />
            </Picker>
            </View>
        <TextInput
           onFocus={() => onCVVNumberChange()}
           onSubmitEditing={() => setCardCVVFocused(false)}
           onEndEditing={() => onCVVNumberChangeEnd()}
           maxLength={4}
           style={[styles.textInputCVV, {
                        borderColor: isCardCVVFocused == true ? 'blue' : 'black',}]}
           onChangeText={(text) => onUpdateState('cardCvv', text)}
           value={state.cvv}
           />
        </View>
        <View style={{paddingTop: 5}}>
            <Button title="Submit" onPress={() => resetCard()} />
        </View>
        </View>
            )
}

    const styles = StyleSheet.create({
        textFormContainer:{
            backgroundColor: '#ffffff',
            flex: 1,
            paddingTop: 20,
            marginLeft: 20,
            marginRight: 20,
            shadowColor: "#000000",
            shadowOpacity: 0.8,
            shadowRadius: 2,
            shadowOffset: {
                height:1,
                width:1
                }
          },
          textContainer: {
            height: 40,
            margin: 15,
          },
          textContainerCVV: {

            height: 40,
            margin: 15,
            paddingLeft: 125,
          },
          textInput: {
            margin: 20,
            marginTop: -25,
            padding: 12,
            borderWidth: 1,
          },
          textInputCVV: {
            margin: 5,
            marginTop: -25,
            padding: 12,
            borderWidth: 1,
            width: 85,
          },
          pickerStyle: {
            marginTop: -25,
            height: 50,
            width: 130,
            marginLeft: 12,
          },
          pickerViewStyle: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            height: 50,
            width: 65,
            marginTop: -30,
            borderRadius: 3,
            marginLeft: 15,
          },

          row: {
            flexDirection: 'row',
            alignItems: 'center',
          },
    });

export default formCard;