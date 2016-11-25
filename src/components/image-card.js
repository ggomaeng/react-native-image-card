/**
 * Created by ggoma on 2016. 11. 25..
 */
import React, {Component} from 'react';
import {
Animated,
View,
Text,
Image,
TouchableWithoutFeedback,
StyleSheet
} from 'react-native';

export default class ImageCard extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            flipped: false,
            flipping: false,
            originalHeight: props.height,
            frontHeight: new Animated.Value(props.height),
            frontWidth: props.width,
            backHeight: new Animated.Value(0),
            opacity: new Animated.Value(0),
            source: props.source,
            backgroundColor: props.backColor,
            title: props.title,
            description: props.description,
            titleColor: props.titleColor,
            descColor: props.descColor
        };
        this.flip = this.flip.bind(this);
    }

    flip() {
        var {flipped} = this.state;
        flipped ? this.flipToBack() : this.flipToFront();
        this.setState({flipped: !flipped});


    }

    flipToBack() {
        var {originalHeight} = this.state;
        this.setState({imageBorder: {
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0
        }});
        Animated.parallel([
            Animated.timing(
                this.state.frontHeight,
                {
                    toValue: 0
                }
            ).start(),
            Animated.timing(
                this.state.backHeight,
                {
                    toValue: originalHeight
                }
            ).start(),
            Animated.timing(
                this.state.opacity,
                {
                    toValue: 1,
                    duration: 1200
                }
            ).start()
        ])
    }

    flipToFront() {
        var {originalHeight} = this.state;
        Animated.parallel([
            Animated.timing(
                this.state.opacity,
                {
                    toValue: 0,
                    duration: 300,
                }
            ).start(),
            Animated.timing(
                this.state.frontHeight,
                {
                    toValue: originalHeight
                }
            ).start(),
            Animated.timing(
                this.state.backHeight,
                {
                    toValue: 0
                }
            ).start()
        ])
    }


    renderBack() {
        var {title, description, titleColor, descColor} = this.state;
        var {opacity} = this.state;
        return (
            <Animated.View style={{opacity, padding: 16}}>
                <Text style={{fontSize: 24, color: titleColor, fontWeight: '800'}}>{title}</Text>
                <Text style={{fontSize: 12, color: descColor}}>{description}</Text>
            </Animated.View>
        )
    }

    render() {
        const {frontHeight, frontWidth, backHeight, source, backgroundColor} = this.state;

        return (
            <TouchableWithoutFeedback onPress={this.flip}>
                <View style={{margin: 16}}>
                    <Animated.View style={{height: frontHeight, width: frontWidth}}>
                        <Image source={source} style={styles.image}/>
                    </Animated.View>
                    <Animated.View style={[{justifyContent: 'center', alignItems: 'center',
                    backgroundColor, height: backHeight, width: frontWidth}]}>
                        {this.renderBack()}
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

var styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'stretch',
        width: null,
        height: null,
    }
});