import { Pressable, Text, StyleSheet } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ButtonC = (props) =>{
    return(
        <Pressable style = {[styles.box, {backgroundColor: props.bgC}]}>
            <Text style = {styles.text}>
                {props.children}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    box:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: hp('1.5%'),
        padding: hp('1%'),
        marginTop: hp('2.4%'),
    },
    text:{
        textAlign: 'center',
        fontWeight: '600',
        color: '#F3F3F3',
        fontSize: hp('2.5%'),
    }
})

export default ButtonC