import { useState } from "react";
import { TextInput, StyleSheet, Text, View, Pressable } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';

//<Ionicons name="eye-off" size={24} color="black" /> puźniej dodać

const InputC = (props) =>{
    const [value, setValue] = useState('');
    const [visible, setVisible] = useState(props.secure)
    const [icon, setIcon] = useState('eye');

    const toggleIcon = () => {
        if(icon == 'eye'){
            setIcon('eye-off')
            setVisible(false)
        }
        else{
            setIcon('eye')
            setVisible(true)
        }
    }

    return(
        <View style={styles.inputBox}>
            <TextInput 
                style = {styles.input}      
                autoCorrect={false}
                placeholder={props.children}
                placeholderTextColor={'rgba(243, 243, 243, 0.5)'}
                defaultValue={value}
                onChange={setValue}
                secureTextEntry={visible}
            />
            {props.secure &&
                <Pressable onPress={toggleIcon}>
                    <Ionicons 
                        name={icon}
                        size={hp('3.5%')} 
                        color="rgba(243, 243, 243, 0.5)" 
                        style={{width:hp('3.5%'),height:hp('3.5%')}} 
                    />
                </Pressable>
            }
        </View>
    )
};

const styles = StyleSheet.create({
    input:{
        color:'rgb(243, 243, 243)',
        fontSize: hp('2.5%'),
        width:'90%',
    },
    inputBox:{
        flexDirection:'row',
        backgroundColor: '#C06C84',
        padding: hp('1.6%'),
        borderRadius: hp('1%'),
    }
})

export default InputC;