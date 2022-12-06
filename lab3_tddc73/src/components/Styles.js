import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    //HomePage:
    pickerStyle: {
    color: 'red',
    backgroundColor: 'black',
    width: '100%',
    },
    pickerContainer: {
        width: '100%',
        height: '8%',
        borderTopWidth: 5,
        borderColor: 'white',
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
        backgroundColor: '#6e6d6d',
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
    forksText: {
        fontSize: 13,
        color: 'white',
    },
    starText: {
        fontSize: 13,
        fontWeight: "bold",
    },
    forksBox: {
        width: 90,
        backgroundColor: '#4a4949',
        margin: 3,
    },
    starBox: {
        width: 90,
        backgroundColor: 'yellow',
        margin: 3,
    },

    //DetailedPage:
    buttonBox: {
        width: 130,
        height: 80,
        margin: 20,
    },
    detailedContainer: {
        backgroundColor: '#6e6d6d',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textProjectTitleDetail: {
        fontSize: 25,
        color: 'white',
        margin: 80,
    },
    textProjectDescrDetail: {
        fontSize: 15,
        color: 'white',
        margin: 10,
    },
});