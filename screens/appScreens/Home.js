import { Text, View, StyleSheet, Image } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Home = () =>{
    return(
        <View style={styles.mainCointainer}>
            <Text style={[styles.text, styles.h1]}> Welcome </Text>
            <Text style={[styles.text]}> this is Home Screen </Text>
            <Text style={[styles.text]}>you can use bottom tab to navigate</Text>
            <Image
                style={styles.image}
                source={{uri:'https://cataas.com/cat/gif'}} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainCointainer:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#1D3549'
    },
    text:{
        color:'#F3F3F3',
        justifyContent:'center',
        alignItems: 'center',
        fontSize:hp('2%')
    },
    h1:{
        fontSize:hp('5%'),
        marginTop:hp('10%'),
        fontWeight: '700'
    },
    image:{
        marginTop:hp('10%'),
        borderRadius:100000,
        borderColor:'#F3F3F3',
        borderWidth:2,
        width:wp('60%'),
        height:wp('60%'),
        overflow: 'hidden'
    }
})
export default Home;