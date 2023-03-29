import { Text, View, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ButtonC from "../componentsForAll/ButtonC";

const Logout = ({navigation}) =>{
    return(
        <View style={styles.mainCointainer}>
            <Text style={[styles.text, styles.h1]}>Are you sure?</Text>
            <Text style={styles.text}>if you click this button</Text>
            <Text style={styles.text}>you will must login again</Text>
            <ButtonC bgC = {'#6C5B7B'} onPress={() => navigation.navigate('Menu')}>logout</ButtonC>
        </View>
    )
}

const styles = StyleSheet.create({
    mainCointainer:{
        flex:1,
        padding:'10%',
        backgroundColor:'#355C7D'
    },
    text:{
        color:'#F3F3F3',
        justifyContent:'center',
        textAlign:'center',
        fontSize:hp('2%')
    },
    h1:{
        fontSize:hp('5%'),
        marginTop:hp('10%'),
        fontWeight: '700'
    },
})
export default Logout;