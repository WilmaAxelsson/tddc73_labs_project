import React, { useState } from 'react';
import {View, Text, Button, ScrollView } from 'react-native';
import styles from '../components/Styles';
import { gql, useQuery } from '@apollo/client';

const DetailedPage = ({ route, navigation }) => {

    const [search, setSearch] = useState('any');

    const proj = route.params.project;

    //console.log(proj);
    return(
    <View style={styles.detailedContainer}>
            <Text style={styles.textProjectTitleDetail}>{proj.name}</Text>
            <Text style={styles.textProjectDescrDetail}>{proj.description}</Text>
            <Text>License: {(proj.licenseInfo.key)} </Text>
            <Text>Commits: {proj.defaultBranchRef.target.history.totalCount}</Text>
            <Text>Branches: {proj.refs.totalCount}</Text>
        <View style={styles.buttonBox}>
            <Button title='Tillbaka' onPress={() => {navigation.navigate("Home", {})}}/>
        </View>
    </View>
    );
}

export default DetailedPage;
