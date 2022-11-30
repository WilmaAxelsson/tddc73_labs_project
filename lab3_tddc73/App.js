
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

//import DetailedPage from "./components/DetailedPage";
import HomePage from "./components/HomePage";


const Stack = createStackNavigator();

const httpLink = createHttpLink({ uri: 'https://api.github.com/graphql' });

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: GITHUB_TOKEN ? `Bearer ${GITHUB_TOKEN}` : "",
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

//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

const App = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>

    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen
            name="Home"
            component={HomePage}
            options= {{ title: 'Trending repos'}}
            />
    </Stack.Navigator>
    </NavigationContainer>
  </ApolloProvider>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },

});

export default App;
