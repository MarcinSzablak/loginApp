import { Text, View, Pressable, StyleSheet } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated,{ useSharedValue, useAnimatedStyle, withSpring} from "react-native-reanimated";
//------------------------------------------------------------------------\\
import AddAccount from "./AddAccount"

const Account = (props) => {
    const tapValue = useSharedValue(false);
    
    const tapStyle = useAnimatedStyle(() => {
        return {
          transform: [{
            scale: withSpring(tapValue.value ? 0.9 : 1)
          }],
        };
      });

    const handlePress = Gesture.Tap() 
    .onBegin(()=>{
        tapValue.value = true;
    })
    .onEnd(()=>{
        tapValue.value = false;
    })

    if(props.id != "TheOnlyOne"){
        return(
            <Pressable onPress={props.account}>
                <GestureDetector gesture={handlePress}>
                    <Animated.View style={[styles.box, tapStyle]}>
                        <View style={styles.image}/>
                        <Text style={styles.text}>
                            {props.children}
                        </Text>
                    </Animated.View>
                </GestureDetector>
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