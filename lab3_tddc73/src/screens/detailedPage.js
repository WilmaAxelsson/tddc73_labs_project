import React from 'react';
import {View, Text, Button, ScrollView } from 'react-native';
import styles from '../components/Styles';

export default function DetailedPage ({ navigation }) {

    return(
    <View style={styles.detailedContainer}>
        <View>
            <Text>{navigation.getParam('name')}</Text>
            <Text>{navigation.getParam('description')}</Text>
        </View>

            <Text>License: <Text>{navigation.getParam('licenseInfo').key}</Text> </Text>
            <Text>Commits: <Text></Text>{navigation.getParam('defaultBranchRef').target.history.totalCount}</Text>
            <Text>Branches: <Text></Text>{navigation.getParam('refs').totalCount}</Text>
        <View style={styles.buttonBox}>
            <Button color='#45f7d2' title='Return to homescreen' onPress={() => navigation.goBack()}/>
        </View>
    </View>
    );
}
