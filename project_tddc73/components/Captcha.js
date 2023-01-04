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
  Image,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import { Component } from 'react';

const Captcha = ({ navigation }) =>{

    const [stateNumb1, setStateNumb1] = React.useState(Math.floor(Math.random()*50) + 1);
    const [stateNumb2, setStateNumb2] = React.useState(Math.floor(Math.random()*50) + 1);
    const [stateSum, setStateSum] = React.useState(stateNumb1 + stateNumb2);

  const updateState = (keyName, value) => {
    setState({
      ...state,
      [keyName]: value,
    });
  };

    captchaGenerator = async () => {
        var numb1 = Math.floor(Math.random()*50) + 1;
        var numb2 = Math.floor(Math.random()*50) + 1;

        var sum = numb1 + numb2;

        setStateNumb1(numb1);
        setStateNumb2(numb2);
        setStateSum(sum);

    };

    run_captcha =() => {
        var temp = stateNumb1 + stateNumb2;

        if(stateSum == temp){
            Alert.alert("You are registered!");
            navigation.navigate("Home", {});
        }
        else {
            Alert.alert("You did not enter the correct sum.");
        }
        captchaGenerator();
    }

return(
    <View style={styles.container}>
        <View style={styles.captchaContainer}>
            <Text style={styles.textStyle}>
                {stateNumb1} {"+"} {stateNumb2} {"="}
            </Text>
            <TextInput
                placeholder="Enter sum of numbers here"
                onChangeText={text => setStateSum(text)}
                style={styles.textInputStyle}
                />
                    <TouchableOpacity onPress={captchaGenerator}>
                        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/195px-RecaptchaLogo.svg.png'}}
                            style={styles.imageStyle} />

                    </TouchableOpacity>
        </View>
        <Button title="Submit" onPress={() => run_captcha()}  />
        </View>
);
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    captchaContainer: {
        flexDirection: 'row',
        margin: 10,
        padding: 12,
    },
    textStyle: {
        fontSize: 16,
        padding: 6,
        margin: 3,
        color: 'black'
    },
    textInputStyle: {
        textAlign: 'center',
        width: 150,
        height: 40,
        margin: 5,
        borderWidth: 1,
        borderRadius: 6,
    },
    imageStyle: {
        width: 52,
        height: 52,
        resizeMode: 'contain',
        margin: 3
    }



});

export default Captcha;