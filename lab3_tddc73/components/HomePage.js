import React, { useState, useEffect } from 'react'
import { View, FlatList, Text, TouchableOpacity } from 'react-native'
//import { RecyclerListView } from 'recyclerlistview';
import styles from './Styles'
import { Picker } from '@react-native-picker/picker';
import { gql, useQuery } from '@apollo/client';

const initialValues = {
    language: 'any',
    stars: '0',
    forks: '0',
    //activeField: 0,
}

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

export default ({navigation}) => {

    const [state, setState] = useState(initialValues);

    const { loading, error, data } = useQuery(REPO_QUERY, {
        variables: {
          query: `stars:>1000 forks:>1000 ${ state.language == 'any' ? '' : 'language:' + state.language }`
        }
    });

    const updateState = (stateName, value) => {
        setState({
          ...state,
          [stateName]: value
        });
      };


  const listRepos = () => {
    if(loading) {
      //return <Loading itemType={'repositories'}/>
    }

    return(
      <FlatList
        data={data.search.nodes}
        renderItem={({ item }) => (
          <RepoItem
            repo={item}
            onPress={() => navigation.navigate('Repo', { repo: item })}
          />
        )}
        keyExtractor={(repo) => repo.id.toString()}
      />
    );
  }

    const ShowRepo = ({repo, onPress }) => {

    return(
    <View>

    </View>
    );

    }

    return (
        <View>
        {listRepos()}
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={state.language}
                    onValueChange={(value) => updateState('language', value)}
                    style={styles.pickerStyle}
                    itemStyle ={styles.pickerStyle}
                >
                  <Picker.Item color={ghWhite} label="Any Language" value="any"/>
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
    )
}