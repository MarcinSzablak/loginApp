import { Text, View, Pressable, StyleSheet } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Feather } from '@expo/vector-icons'; 

const AddAccount = (props) => {
    return(
        <Pressable style={styles.box} onPress={props.addAccount}>
            <Feather name="user-plus" size={hp('6%')} color="white"/>
            <Text style={styles.text}>
                {props.children}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    box:{
        backgroundColor:'rgba(29, 53, 73, 0.6)',
        padding: hp('2%'),
        marginBottom: hp('2%'),
        flexDirection:'row',
        alignItems:'center',
        position:'relative',
        borderRadius:hp('1.5%'),
    },
    text:{
        textAlign:'center',
        fontWeight:'700',
        width:'80%',
        color:'#FFFFFF',
        fontSize: hp('2.5%'),
    }
})

export default AddAccount;