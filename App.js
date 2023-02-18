import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//------------------------------------------------------------------------\\
import Menu from './screens/Menu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Menu'>
          <Stack.Screen
            name = "Menu"
            component={Menu}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
