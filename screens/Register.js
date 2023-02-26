import { useState } from 'react'
import { View, Text, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { A } from '@expo/html-elements';
//------------------------------------------------------------------------\\
import HeaderC from './componentsForAll/HeaderC';
import InputHeader from './componentsForAll/InputHeader';
import InputC from './componentsForAll/InputC';
import ButtonC from "./componentsForAll/ButtonC";
//import { signUp } from './authentication/authenticantion';

const Register = ({navigation}) =>{
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    
    const nameHandler = (result) =>{
        setName(result)
    }
    
    const mailHandler = (result) =>{
        setMail(result)
    }

    const passwordHandler = (result) =>{
        setPassword(result)
    }

    const pressHandler = () =>{
        //signUp(mail, password, name)
        navigation.navigate('AppScreen')
    }

    return(
        <View style={styles.mainContainer}>
            <HeaderC>Register</HeaderC>
            <View style={{margin:hp('-1%')}}/>
            <HeaderC>Welcome from!</HeaderC>
    
            <InputHeader>Add nic</InputHeader>
            <InputC 
                secure={false}
                handler={nameHandler}
            >
                Username
            </InputC>
            <View style={{margin:hp('2%')}}/>

            <InputHeader>ACCOUNT INFORMATION</InputHeader>
            <InputC 
                secure={false}
                handler={mailHandler}
            >
                Email or phone number
            </InputC>
            <View style={{margin:hp('2%')}}/>

            <InputC 
                secure={true}
                handler={passwordHandler}
            >
                Password
            </InputC>
            <View style={{margin:hp('1%')}}/>
            <Text style={styles.text}>
                By registering, you agree to 
                <A href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' style={styles.link}> Terms of Service </A>
                and 
                <A href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' style={styles.link}> Privacy Policy.</A>
            </Text>

            <ButtonC bgC={'#F67280'} onPress={pressHandler}>Register</ButtonC>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: '#355C7D',
        padding: '8%',
    },
    text:{
        color:'#F3F3F3',
        fontSize: hp('1.3%'),
        padding:hp('0.3%'),
        marginBottom:hp('1%')
    },
    link:{
        color: '#ED8B54',
        textDecorationLine:'underline',
    }
})

export default Register;