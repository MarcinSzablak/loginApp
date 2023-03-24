import { View , Pressable, Text, StyleSheet } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ButtonC = (props) =>{
    return(
        <Pressable onPress={props.onPress}>
            <View style = {[styles.box, {backgroundColor:props.bgC}]} >
                <Text style = {styles.text}>
                    {props.children}
                </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    box:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: hp('1.5%'),
        padding: hp('1.3%'),
        marginTop: hp('2.3%')
    },
    text:{
        textAlign: 'center',
        fontWeight: '600',
        color: '#F3F3F3',
        fontSize: hp('2.5%'),
    }
})

export default ButtonC;