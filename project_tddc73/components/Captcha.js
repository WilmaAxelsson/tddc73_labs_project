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

/*    const initialStates = {
        textInput_dummy: 0,
        randNumb1: Math.floor(Math.random()*100) + 1,
        randNumb2: Math.floor(Math.random()*100) + 1,
        sum_dummy: 0,
    };*/

const Captcha = () =>{

    //const [state, setState] = React.useState(initialStates);

    //state.sum_dummy = state.randNumb1 + state.randNumb2;

    const [stateNumb1, setStateNumb1] = React.useState(Math.floor(Math.random()*100) + 1);
    const [stateNumb2, setStateNumb2] = React.useState(Math.floor(Math.random()*100) + 1);
    const [stateSum, setStateSum] = React.useState(stateNumb1 + stateNumb2);

  const updateState = (keyName, value) => {
    setState({
      ...state,
      [keyName]: value,
    });
  };



    captchaGenerator = async () => {
        var numb1 = Math.floor(Math.random()*100) + 1;
        var numb2 = Math.floor(Math.random()*100) + 1;

        var sum = numb1 + numb2;

        //updateState('randNumb1', numb1);
        //updateState('randNumb2', numb1);
        //updateState('sum_dummy', sum);
        setStateNumb1(numb1);
        setStateNumb2(numb2);
        setStateSum(sum);

        //setState({ randNumb1: 5, randNumb2: 5});
        //setState({sum_dummy: sum});

        console.log(stateNumb1);

    };

    run_captcha =() => {
        var temp = this.randNumb1 + this.randNumb2;

        if(state.textInput_dummy == temp){
            Alert.alert("u done gud");
        }
        else {
            Alert.alert("u done bad");
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
                onChangeText={text => updateState('sum_dummy', text)}
                style={styles.textInputStyle}
                />
                    <TouchableOpacity onPress={captchaGenerator}>
                        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/195px-RecaptchaLogo.svg.png'}}
                            style={styles.imageStyle} />

                    </TouchableOpacity>

        </View>
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    captchaContainer: {
        flexDirection: 'row',
    },
    textStyle: {
        fontSize: 18,
        textAlign: 'center',
        color: 'black',
    },
    textInputStyle: {
        textAlign: 'center',
        width: 150,
        height: 40,
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