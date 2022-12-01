import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    //HomePage:

    pickerStyle: {
    color: 'white',
    backgroundColor: 'black',
    width: '100%',
    },

    pickerContainer: {
        width: '100%',
        height: '10%',
        borderTopWidth: 1,
        borderColor: 'black',
    },
    homeStyle: {
        backgroundColor: '#383838',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    repoBox: {
        width: 300,
        backgroundColor: '#5e5d5d',
        margin: 3,

    },
    titleRepo: {
        height: 45,
        padding: 10,
        width: '100%',
    },
    textTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: 'white'
    },
    descriptionRepo: {
        width: '100%',
        paddingLeft: 10,
    },
    textDescription: {
        fontSize: 13,
        marginTop: 14,
        color: 'white',
    },

    //DetailedPage:
    buttonBox: {
        width: 90,
        height: 60,
        margin: 25,
    },
    detailedContainer: {
        backgroundColor: 'grey',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});