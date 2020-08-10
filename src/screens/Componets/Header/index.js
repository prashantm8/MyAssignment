import React , {Component} from 'react'
import {View , Text, } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';


class Header extends Component {
    render () {
        return (
            <View style={styles.container}>
                {this.props.showBack?
                <TouchableOpacity
                    onPress={this.props.onBackPress}
                    style={styles.nameText}
                >
                    <Ionicons name='md-arrow-back' color="white" size={20} />
                </TouchableOpacity>
                :null}
                <Text style={styles.titleText}>
                    {this.props.text}
                </Text>

            </View>
        )
    }
}

export default Header