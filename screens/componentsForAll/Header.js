import { View ,Text, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Header = (props) => {
    return(
        <View style = { styles.box }>
            <Text style = { styles.text }>
                {props.children}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    text:{
        marginTop: '5%',
        fontWeight: '600',
        fontSize: hp('3.8%'),
        textAlign: 'center',
        color: '#F3F3F3',
    }
})

export default Header;