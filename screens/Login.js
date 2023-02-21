import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ButtonC from './componentsForAll/ButtonC';
import HeaderC from './componentsForAll/HeaderC';
import InputC from './componentsForAll/InputC';
import InputHeader from './componentsForAll/InputHeader';
import { A } from '@expo/html-elements';


const Login = ({navigation}) =>{
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

    const mailHandler = (result) =>{
        setMail(result)
    }

    const passwordHandler = (result) =>{
        setPassword(result)
    }

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
            <ButtonC onPress={() => navigation.navigate('AppScreen')} bgC={'#6C5B7B'}>Login</ButtonC>
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