import { useState, useCallback, useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//------------------------------------------------------------------------\\
import ButtonC from "./componentsForAll/ButtonC";
import HeaderC from "./componentsForAll/HeaderC";
import Account from "./account/Account";

const Menu = ({navigation}) => {
    const [loadedData, setLoadedData] = useState([]);

    const getData = useCallback(async () => {
      const res = await fetch('https://loginapp1-b9c42-default-rtdb.firebaseio.com//user.json');
      const data = await res.json();
  
      const loadedData = [];
      for (const key in data) {
        loadedData.push({
          name: data[key].name,
          mail: data[key].mail,
          age: data[key].age,
          id: data[key].id
        });
      }
  
      return loadedData;
    }, []);
  
    useEffect(() => {
      getData().then((data) => {
        setLoadedData(data);
      });
    }, [getData()]);

    return(
        <View style={styles.mainContainer}>
            <View style={{marginBottom:hp('3%')}}/>
            <HeaderC>Welcom to loginApp</HeaderC>
            <Text style = {styles.text}>
                choose profile to login or register another one
            </Text>
            <FlatList
                style = {styles.flatList}   
                data = {loadedData}
                horizontal = {false}
                showsVerticalScrollIndicator = {false}
                renderItem = {({item}) => 
                    <Account 
                        id={item.id} 
                        key={item.mail}
                        account = {() => navigation.navigate('Login')}
                        addAccount = {() => navigation.navigate('Register')}
                    >
                        {item.name}
                    </Account>
                    }
                keyExtractor = {item => item.id}
            />
            <View>
                <ButtonC bgC = {'#6C5B7B'} onPress={() => navigation.navigate('Login')}>Login</ButtonC>
                <ButtonC bgC = {'#F67280'} onPress={() =>navigation.navigate('Register')}>Register</ButtonC>
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