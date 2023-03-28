import { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ButtonC from '../componentsForAll/ButtonC';
import HeaderC from '../componentsForAll/HeaderC';
import InputC from '../componentsForAll/InputC';
import InputHeader from '../componentsForAll/InputHeader';
import { A } from '@expo/html-elements';


const Login = ({navigation}) =>{
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [loadedData, setLoadedData] = useState([]);

    const mailHandler = (result) =>{
        setMail(result)
    }

    const passwordHandler = (result) =>{
        setPassword(result)
    }

    const getData = useCallback(async () => {
      const res = await fetch('https://loginapp1-b9c42-default-rtdb.firebaseio.com//user.json');
      const data = await res.json();
  
      const loadedData = [];
      for (const key in data) {
        loadedData.push({
          mail: data[key].mail,
          password: data[key].password,
        });
      }
  
      return loadedData;
    }, []);
  
    useEffect(() => {
      getData().then((data) => {
        setLoadedData(data);
      });
    }, [getData()]);
    
    const loginHandler = () => {
        let isLoggedIn = false;
        for (const data of loadedData) {
          if (data.mail === mail && data.password === password) {
            isLoggedIn = true;
            break;
          } else if (data.mail === mail) {
            Alert.alert("Error", "Invalid password", [{ text: "OK" }]);
            return;
          } else {
            Alert.alert("Error", "Invalid email", [{ text: "OK" }]);
            return;
          }
        } 
        if (isLoggedIn) {
          navigation.navigate('Home');
        }
      };
      

    return(
        <View style={styles.mainConteiner}>

            <HeaderC>Welcom back!</HeaderC>

            <InputHeader>ACCOUNT INFORMATION</InputHeader>

            <InputC 
                secure={false} 
                handler={mailHandler}
            >
                Email or phone number
            </InputC>
            <View style={{marginBottom:hp('3%')}}/>
            <InputC 
                secure={true} 
                handler={passwordHandler}
            >
                Password
            </InputC>

            <A href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' style={styles.text}>Forgot your password?</A>

            <View style={{marginBottom:hp('3%')}}/>
            <ButtonC onPress={loginHandler} bgC={'#6C5B7B'}>Login</ButtonC>
        </View>
    )
}
//navigation.navigate('AppScreen')

const styles = StyleSheet.create({
    mainConteiner:{
        flex: 1,
        backgroundColor: '#355C7D',
        padding: '8%',
    },
    text:{
        color:'#ED8B54',
        fontSize:hp('1.7%'),
        fontWeight:'600',
        textDecorationLine:'underline',
    }
})

export default Login;