
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import {GITHUB_TOKEN} from "@env";
import { setContext } from '@apollo/client/link/context';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DetailedPage from "./src/screens/detailedPage";
import HomePage from "./src/screens/HomePage";

const Stack = createStackNavigator();

const httpLink = createHttpLink({ uri: 'https://api.github.com/graphql' });
const TOKEN = "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";

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `bearer ${TOKEN}`,
    }
  }
});

const screenOptions = {
    headerStyle: {backgroundColor: 'black'},
    headerTintColor: 'white',
}

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const App = () => {
return (
  <ApolloProvider client={client}>
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
            <Stack.Screen
                name="Home"
                component={HomePage}
                options= {{ title: 'Trending repos on Github'}}
                />
            <Stack.Screen
                name="Project"
                component={DetailedPage}
                options= {{ title: 'Project info'}}
                />
        </Stack.Navigator>
        </NavigationContainer>
  </ApolloProvider>
);

};

export default App;
