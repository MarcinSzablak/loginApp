import { StyleSheet, View, Text, FlatList } from "react-native";
import Header from "./componentsForAll/Header";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//------------------------------------------------------------------------\\
import ButtonC from "./componentsForAll/ButtonC";
import Account from "./account/Account";
import DATA from "./Data";

const Menu = ({navigation}) => {
    return(
        <View style={styles.mainContainer}>
            <Header>Welcom to loginApp</Header>
            <Text style = {styles.text}>
                choose profile to login or register another one
            </Text>
            <FlatList
                style = {styles.flatList}   
                data = {DATA}
                renderItem = {({item}) => 
                    <Account id={item.id}>
                        {item.name}
                    </Account>
                    }
                keyExtractor={item => item.id}
            />
            <View>
                <ButtonC bgC = {'#6C5B7B'}>Login</ButtonC>
                <ButtonC bgC = {'#F67280'}>Register</ButtonC>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#355C7D',
        padding: '8%',
    },
    text:{
        textAlign:'center',
        color:'#F3F3F3',
        opacity: 0.5,
        fontSize:hp('1.6%'),
        marginTop:10
    },
    flatList:{
        marginTop:'8%',
    }
})

export default Menu;