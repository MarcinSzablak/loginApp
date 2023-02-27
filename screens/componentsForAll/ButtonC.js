import { View , Text, StyleSheet } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated,{ useSharedValue, useAnimatedStyle, withSpring, withTiming } from "react-native-reanimated";

const ButtonC = (props) =>{
    const tapValue = useSharedValue(false);

    const tapStyle = useAnimatedStyle(()=>{
        return{
            backgroundColor: tapValue.value ? 'red' : props.bgC,
            transform: [
                { scale: tapValue.value + 1.1 }
            ],
        }
    })

    const handlePress = Gesture.Tap() 
    .onStart(()=>{
        tapValue.value = true
        console.log(tapValue.value)
    })
    .onEnd(()=>{
        tapValue.value = false
        console.log(tapValue.value)
        //props.onPress()
    })

    return(
        <GestureDetector gesture={handlePress}>
            <Animated.View style = {[styles.box, tapStyle]} >
                <Text style = {styles.text}>
                    {props.children}
                </Text>
            </Animated.View>
        </GestureDetector>
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