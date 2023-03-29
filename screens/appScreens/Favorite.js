import React, {useEffect, useState} from 'react';
import { FlatList, View, StyleSheet, Image, Pressable, Linking } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Cat = (props) =>{
    return(
        <Pressable onPress={() => Linking.openURL(props.url.uri)}>
            <Image
            style={styles.cat}
            source={props.url}
            />
        </Pressable>
    )
}



const Favorite = () =>{
    const [data, setData] = useState([]);
    
    const getMoviesFromApi = async () => {
        const response = await fetch('https://cataas.com/cat?json=true');
        const json = await response.json();
        return json.url;
    };
    
    const fetchMore = async () => {
        const newUrls = await Promise.all(
            Array.from({length: 20}).map(async (_, i) => {
                const url = 'https://cataas.com' + await getMoviesFromApi();
                return url;
            })
        );
        setData(prevData => [...prevData, ...newUrls]);
    };
    
    useEffect(() => {
        fetchMore();
    }, []);
    
    return(
        <View style={styles.mainCointainer}>
            <FlatList
                data={data}
                style={styles.list}
                numColumns={2}
                onEndReached={fetchMore}
                keyExtractor={e => e}
                renderItem={({item}) => (
                    <Cat url={{uri: item}}/>
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
    },
    cat:{
        width: wp('50%'),
        height: wp('50%'),
    }
})
export default Favorite;