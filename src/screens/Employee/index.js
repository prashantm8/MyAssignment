import React, { Component } from 'react'
import { View, Text, FlatList, TextInput } from 'react-native'
import Header from '../Componets/Header'
import { Ionicons } from '@expo/vector-icons';
import Button from '../Componets/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux'
import { assignEmployee } from '../../redux/action';


export const DATA = [
    {
        id: '0',
        name: 'Assign to yourself',
        designation: '',
        selected:false
    },
    {
        id: '1',
        name: 'Arlene Robertson',
        designation: 'manager',
        selected:true

    },
    {
        id: '2',
        name: 'Arlene Robertson',
        designation: 'manager',
        selected:true

    },
    {
        id: '3',
        name: 'Arlene Robertson',
        designation: 'manager',
        selected:true

    },
    {
        id: '4',
        name: 'Arlene Robertson',
        designation: 'manager',
        selected:false

    }
]

class Employee extends Component {

    constructor(props) {
        super(props)
        this.state = {
            serachText: ''
        }
    }

    onChangeText = (text) => {
        this.setState({
            serachText: text
        })
    }

    onButtonPress = () => {
        this.props.assignEmployee(DATA.filter((item)=>item.selected==true))
        this.props.navigation.goBack()
    }

    renderItem = ({ item }) => {
        return <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>

            <View style={{ backgroundColor: 'grey', borderRadius: 23, height: 46, width: 46 }} />
            {item.selected ? <View style={{
                backgroundColor: "blue", height: 18,
                position: 'absolute',
                alignSelf: 'flex-end',
                left: 40,
                bottom: 10,
                width: 18, borderRadius: 9, borderWidth: 1, borderColor: 'white', justifyContent: 'center', alignItems: 'center'
            }}>
                <Ionicons name='md-checkmark' color="white" size={12} />

            </View> : null}
            <View style={{ marginLeft: 20 }}>
                <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                {item.id != 0 ? <Text style={{ color: 'grey', fontSize: 14 }}>{item.designation}</Text>
                    : null}
            </View>

        </View>
    }
    onBackPress = () => {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

                <Header text={'Assign employee'} showBack={true} onBackPress={this.onBackPress}/>
                <View style={{ flex: 1 }}>
                    <View style={{ margin: 10, borderWidth: 1, borderColor: 'grey', padding: 10, borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <TextInput
                            placeholder={'Search members'}
                            onChangeText={this.onChangeText}
                            value={this.state.serachText}

                        />

                        <Ionicons name='md-search' color="grey" size={20} />

                    </View>

                    <FlatList
                        data={DATA}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>

                <Button
                    buttonName={'Assign'}
                    onPress={this.onButtonPress}
                />

            </SafeAreaView>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        assignEmployee:(data)=> dispatch(assignEmployee(data))
    }
}

const mapStateToProps = (state) => {
    return{
        employeeState:state
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Employee)