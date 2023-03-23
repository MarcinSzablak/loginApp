import { View , Pressable, Text, StyleSheet } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated,{ useSharedValue, useAnimatedStyle, withSpring, runOnJS} from "react-native-reanimated";

const ButtonC = (props) =>{
    const tapValue = useSharedValue(false);
    
    const tapStyle = useAnimatedStyle(() => {
        return {
          backgroundColor: props.bgC,
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
        <Pressable onPress={props.onPress}>
            <GestureDetector gesture={handlePress}>
                <Animated.View style = {[styles.box, tapStyle]} >
                    <Text style = {styles.text}>
                        {props.children}
                    </Text>
                </Animated.View>
            </GestureDetector>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    box:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: hp('1.5%'),
        padding: hp('1.3%'),
        marginTop: hp('2.3%')
    },
    text:{
        textAlign: 'center',
        fontWeight: '600',
        color: '#F3F3F3',
        fontSize: hp('2.5%'),
    }
})

export default ButtonC;