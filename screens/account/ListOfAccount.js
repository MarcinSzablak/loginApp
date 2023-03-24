import { View, FlatList, StyleSheet } from "react-native";
import Account from "./Account";
import DATA from "../Data";

const ListOfAccount = ({navigation}) =>{
    <View>
        <FlatList
        style = {styles.flatList}   
        data = {DATA}
        horizontal = {false}
        showsVerticalScrollIndicator = {false}
        renderItem = {({item}) => 
            <Account 
                id={item.id}
                account = {() => navigation.navigate('Login')}
                addAccount = {() => navigation.navigate('Register')}
            >
                {item.name}
            </Account>
            }
        keyExtractor = {item => item.id}
        />
    </View>
};

const styles = StyleSheet.create({
    flatList:{
        marginTop:'8%',
    }
})

export default ListOfAccount;