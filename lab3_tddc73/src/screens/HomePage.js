import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
//import { RecyclerListView } from 'recyclerlistview';
import styles from '../components/Styles';
import { Picker } from '@react-native-picker/picker';
import { gql, useQuery } from '@apollo/client';
import detailedPage from './detailedPage';

const REPO_QUERY = gql`
  query MyQuery($Search: String!) {
    search(query: $Search, type: REPOSITORY, first: 10) {
        nodes {
        ... on Repository {
          description
          stargazerCount
          name
          forkCount
          refs(first:0, refPrefix: "refs/heads/"){
              totalCount
          }
          licenseInfo{
              key
          }
          defaultBranchRef{
              target{
                  ...on Commit{
                      history{
                          totalCount
                      }
                  }
              }
          }
        }
      }
    }
  }
`;

    function fetchQuery(searchLang) {
        const { loading, error, data } = useQuery(REPO_QUERY, {
            variables:
                searchLang === 'any'
                    ? { Search: 'stars:>1000' }
                    : { Search: 'stars:>1000 language:' + searchLang },
        });

        if (loading) return 'loading';
        if (error) {
            console.log(`Error: ${error.message}`);
            return 'error';
        }

        const repositories = data.search.nodes;

        return repositories;
    }

    export default function HomePage ({ navigation }) {

    const [search, setSearch] = useState('any');

    const repositories = fetchQuery(search);

    const Separator = () => (<View style={styles.separator} />)

    return(
    <View style={styles.homeStyle}>
      <FlatList
        data={repositories}
        renderItem={({ item }) => (
        <TouchableOpacity onPress={() => {navigation.navigate("ReposPage", item)}}>
            <View style={styles.repoBox}>
                <View style= {styles.titleRepo}>
                    <Text style={styles.textTitle}>{item.name}</Text>
                </View>
            <View style={styles.descriptionRepo}>
                    <Text style={styles.textDescription}>{item.description}</Text>
            </View>
            </View>
        </TouchableOpacity>
        )}
        />

            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={search}
                    onValueChange={(itemValue, itemIndex) => setSearch(itemValue)}
                    style={styles.pickerStyle}
                    itemStyle ={styles.pickerStyle}>
                  <Picker.Item label="Any Language" value="any"/>
                  <Picker.Item label="C" value="c"/>
                  <Picker.Item label="C#" value="c#"/>
                  <Picker.Item label="C++" value="c++"/>
                  <Picker.Item label="JavaScript" value="javascript"/>
                  <Picker.Item label="React" value="React"/>
                  <Picker.Item label="React Native" value="react native"/>
                  <Picker.Item label="Python" value="python"/>
                  <Picker.Item label="Java" value="java"/>
                  <Picker.Item label="HTML" value="html"/>
                  <Picker.Item label="PHP" value="php"/>
                  <Picker.Item label="CSS" value="css"/>
                  <Picker.Item label="Ruby" value="ruby"/>
                </Picker>
            </View>
        </View>
    );
  }