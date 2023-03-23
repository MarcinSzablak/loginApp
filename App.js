import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView, gestureHandlerRootHOC } from 'react-native-gesture-handler';
//------------------------------------------------------------------------\\
import Menu from './screens/Menu';
import Login from './screens/Login';
import Register from './screens/Register';
import AppScreen from './screens/AppScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{flex:1, backgroundColor:'#355C7D'}}>
      <StatusBar style='auto'/>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Menu'>
          <Stack.Screen
            name = 'Menu'
            component = {Menu}
            options = {{
              headerShown:false,
              transitionSpec: {
                open: configAnimation,
                close: configAnimation,
              },
            }}
          />
          <Stack.Screen
            name = 'Login'
            component = {Login}
            options = {HeaderOptions}
          />
          <Stack.Screen
            name = 'Register'
            component = {Register}
            options = {HeaderOptions}
          />
          <Stack.Screen
            name = 'AppScreen'
            component = {AppScreen}
            options = {HeaderOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const HeaderOptions = {
  title: '',
  headerStyle:{
    backgroundColor:'#355C7D'
  },
  headerTintColor:'#F3F3F3',
  headerShadowVisible:false,
}

const configAnimation = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};