import { Text, View, Pressable, StyleSheet } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Feather } from '@expo/vector-icons'; 
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated,{ useSharedValue, useAnimatedStyle, withSpring} from "react-native-reanimated";

const AddAccount = (props) => {
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

    return(
        <Pressable onPress={props.addAccount}>
            <GestureDetector gesture={handlePress}>
                <Animated.View style={[styles.box, tapStyle]}>
                    <Feather name="user-plus" size={hp('6%')} color="white"/>
                    <Text style={styles.text}>
                        {props.children}
                    </Text>
                </Animated.View>
            </GestureDetector>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    box:{
        backgroundColor:'rgba(29, 53, 73, 0.6)',
        padding: hp('2%'),
        marginBottom: hp('2%'),
        flexDirection:'row',
        alignItems:'center',
        position:'relative',
        borderRadius:hp('1.5%'),
    },
    text:{
        textAlign:'center',
        fontWeight:'700',
        width:'80%',
        color:'#FFFFFF',
        fontSize: hp('2.5%'),
    }
})

export default AddAccount;