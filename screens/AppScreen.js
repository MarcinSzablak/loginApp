import { Text, View, StyleSheet } from "react-native";

const AppScreen = () =>{
    return(
        <View style={styles.mainCointainer}>
            <Text>
                Balls
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainCointainer:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#355C7D'
    }
})
export default AppScreen;