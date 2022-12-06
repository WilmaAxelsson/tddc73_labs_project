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
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

import FastImage from 'react-native-fast-image';

const backgroundImage = require("../assets/images/23.jpeg");
const chip = require('../assets/images/chip.png');

const cardTypeVisa = require('../assets/images/visa.png');
const cardTypeAmex = require('../assets/images/amex.png');
const cardTypeMasterCard = require('../assets/images/mastercard.png');
const cardTypeDiscover = require('../assets/images/discover.png');
const cardTypeTroy = require('../assets/images/troy.png');

const ShowCard = ({state}) => {

    const getCardType = () => {

            let number = state.cardNumber;

            if (number.match(RegExp("^4")) != null) return cardTypeVisa;
            if (number.match(RegExp("^(34|37)")) != null) return cardTypeAmex;
            if (number.match(RegExp("^5[1-5]")) != null) return cardTypeMasterCard;
            if (number.match(RegExp("^6011")) != null) return cardTypeDiscover;
            if (number.match(RegExp('^9792')) != null) return cardTypeTroy;

            return cardTypeVisa; // default
    };

    const CardFront = () => {
        return(
                <ImageBackground source={backgroundImage} style={styles.container}>
                            <View style={styles.column}>
                                <View style={styles.row}>

                                <Image source={chip} style={styles.stChip} />
                            <FastImage
                                style={styles.stCardType}
                                source={getCardType()}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                                </View>
                                <Text style={styles.cNumber}>{state.cardNumber}</Text>
                                <View style={styles.row}>
                                    <View>
                                        <Text style={styles.cCardHolder}>Card Holder</Text>
                                        <Text style={styles.cCardHolder}>
                                            {state.cardHolder.toUpperCase()}
                                        </Text>
                                    </View>
                                <View>
                                <Text style={styles.cExpires}>Expires</Text>
                                <Text style={styles.cExpires}>
                                    {state.cardMonth}/
                                    {state.cardYear == 'YY'
                                        ? state.cardYear
                                        : state.cardYear.substring(2, 4)}
                                </Text>
                                </View>
                            </View>
                            </View>
                        </ImageBackground>

        );
    };

    const CardBack = () => {
        return (
            <ImageBackground source={backgroundImage} style={styles.container}>
                <Text style={styles.stripe}></Text>
                    <View style={styles.backInfo}>
                        <Text style={styles.stCvv}>CVV</Text>
                        <View style={styles.cvvField}>
                            <Text >{state.cardCvv}</Text>
                        </View>
                            <FastImage
                                style={styles.stCardType}
                                source={getCardType()}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                    </View>
            </ImageBackground>

        );
    };
        return state.isCardFlipped ? <CardBack /> : <CardFront />;
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        resizeMode: 'cover',
        borderWidth: 0,
        borderRadius: 20,
        overflow: 'hidden',
    },
    stChip: {
        width: 50,
        height: 40,
        resizeMode: 'cover',
    },
    cNumber: {
        color: 'white',
        fontSize: 25,
        letterSpacing: 3,
        paddingLeft: 20,
      },
    cCardHolder: {
        color: 'white',
        fontSize: 20,
    },
    cExpires: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
    stCardType: {
        width: 110,
        height: 90,
        resizeMode: 'cover',
    },
    backgroundImage: {
        position: "absolute",
        borderRadius: 10,
        height: '100%',
        width: '100%',
        zIndex: 0,
    },
    backContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        paddingTop: 20,
        paddingBottom: 20,
    },
    column: {
        flex: 1,
        justifyContent: 'space-around',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 90,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    stripe: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'right',
        backgroundColor: 'rgba(0, 0, 0, 0.82)',
    },
    backInfo: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        paddingRight: 20,
        paddingLeft: 20,
    },
    cvvField: {
        marginTop: 5,
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'right',
        backgroundColor: 'white',
        borderRadius: 5,
        height: 35,
        alignSelf: 'stretch',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 10,
    },
    stCvv: {
        color: 'white',
        fontSize: 15,
        height: 20,
    },
});


export default ShowCard;