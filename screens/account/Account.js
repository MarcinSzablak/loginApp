import { Text, View, Pressable, StyleSheet } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//------------------------------------------------------------------------\\
import AddAccount from "./AddAccount"

const Account = (props) => {
    if(props.id != "TheOnlyOne"){
        return(
            <Pressable style={styles.box} onPress={props.account}>
                <View style={styles.image}/>
                <Text style={styles.text}>
                    {props.children}
                </Text>
            </Pressable>
        )
    }
    else{
        return(
            <AddAccount addAccount={props.addAccount}>{props.children}</AddAccount>
        )
    }
}

const styles = StyleSheet.create({
    box:{
        backgroundColor:'#1D3549',
        padding: hp('2%'),
        marginBottom: hp('2%'),
        flexDirection:'row',
        alignItems:'center',
        position:'relative',
        borderRadius:hp('1.5%'),
    },
    image:{
        width:wp('15%'),
        height:wp('15%'),
        borderRadius:hp('1%'),
        backgroundColor: '#FFFFFF',
    },
    text:{
        textAlign:'center',
        fontWeight:'700',
        width:'80%',
        color:'#FFFFFF',
        fontSize: hp('2.5%'),
    }
})

export default Account;