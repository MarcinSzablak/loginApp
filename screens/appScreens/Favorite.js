import React, {useEffect, useState} from 'react';
import { FlatList, View, StyleSheet, Image } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Cat = (props) =>{
    return(
        <Image 
        style={styles.cat}
        source={props.url}
        />
    )
}


const Favorite = () =>{
    
    const [data, setDate] = useState([]);
    useEffect(() => {
      fetchMore();
    }, []);

    const fetchMore = () => {
      setDate(prevState => [
        ...prevState,
        ...Array.from({length: 20}).map((_, i) => i + 1 + prevState.length),
      ]);
    };
    return(
        <View style={styles.mainCointainer}>
            <FlatList
                data={data}
                style={styles.list}
                numColumns={1}
                onEndReached={fetchMore}
                keyExtractor={e => e}
                renderItem={({item}) => (
                <Cat url={{uri:'https://cataas.com/cat'}}/>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainCointainer:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#6C5B7B',
        padding:30,
    },
    cat:{
        width:wp('70%'),
        height:wp('70%'),
        borderWidth: 5,
        borderColor: '#F3F3F3',
        borderRadius: '10%',
        marginBottom: 20
    }
})
export default Favorite;