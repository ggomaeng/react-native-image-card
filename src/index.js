/**
 * Created by ggoma on 2016. 11. 25..
 */
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';

import ImageCard from './components/image-card';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ImageCard source={require('./img/macd.jpeg')}
                               width={300}
                               height={200}
                               titleColor={'red'}
                               descColor={'black'}
                               title={"McDonald's"}
                               backColor={'#eee'}
                               description={"McDonald's, or simply McD, is an American hamburger and fast food restaurant chain. It was founded in 1940 as a barbecue restaurant operated by Richard and Maurice McDonald."}/>

                    <ImageCard source={require('./img/big_mac.jpg')}
                               width={300}
                               height={200}
                               titleColor={'yellow'}
                               descColor={'white'}
                               title={"Big Mac"}
                               backColor={'#EB000F'}
                               description={"The Big Mac is a hamburger sold by international fast food restaurant chain McDonald's. It was introduced in the metropolitan area of Pittsburgh, United States, in 1967 and nationwide in 1968. It is one of the company's signature products."}/>

                    <ImageCard source={require('./img/fries.jpg')}
                               width={300}
                               height={200}
                               titleColor={'yellow'}
                               descColor={'white'}
                               title={"French Fries"}
                               backColor={'#EB000F'}
                               description={"Our French fries are born from premium potatoes such as the Russet Burbank and the Shepody. With zero grams of trans fat per labeled serving, these epic fries are crispy and golden on the outside and fluffy on the inside."}/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 40
    },
});
