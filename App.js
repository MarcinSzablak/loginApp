import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AntDesign } from '@expo/vector-icons'; 
//------------------------------------------------------------------------\\
import Menu from './startScreens/Menu';
import Login from './startScreens/Login';
import Register from './startScreens/Register';
import Home from './appScreens/Home';
import Favorite from './appScreens/Favorite';
import Logout from './appScreens/Logout';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () =>{
  return(
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      labelStyle = {{ }}
      labeled={false}
      shifting={true}
      backBehavior='none'
    >
      <Tab.Screen 
        name='Home' 
        component={Home}
        options = {{
          headerShown:false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name='Favorite' 
        component={Favorite}
        options = {{
          headerShown:false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="hearto" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name='Logout' 
        component={Logout}
        options = {{
          headerShown:false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="logout" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='auto'/>
      <NavigationContainer style={{flex:1, backgroundColor:'#355C7D'}}>
        <Stack.Navigator initialRouteName='AppScreen'>
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
            component = {TabNavigator}
            options={{headerShown:false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
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