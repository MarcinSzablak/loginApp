import { Text, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const InputHeader = (props) =>{
    return(
        <Text style={styles.text}>
            {props.children}
        </Text>
    )
};

const styles = StyleSheet.create({
    text:{
        color:'#F3F3F3',
        marginBottom:hp('1%'),
        fontSize:hp('1.7%')
    }
})
export default InputHeader;