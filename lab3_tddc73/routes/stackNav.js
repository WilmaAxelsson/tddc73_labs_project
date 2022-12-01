import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import HomePage from "../src/screens/HomePage";
import detailedPage from "../src/screens/detailedPage";

const Stack = createStackNavigator();

function StackNav() {

    return(
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: 'white',
            },
          }}>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{title: 'Top GitHub Projects'}}
          />
          <Stack.Screen
            name="ReposPage"
            component={detailedPage}
            options={({route}) => ({
              title: route.params.project.number
                ? `Project ${route.params.project.number}: ${route.params.project.title}`
                : route.params.project.title,
            })}
          />
        </Stack.Navigator>

    );

};

export default StackNav;
