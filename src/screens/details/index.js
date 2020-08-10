import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Header from '../Componets/Header'
import { Ionicons } from '@expo/vector-icons';
import Button from '../Componets/Button'
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux'
import { clearEmployee } from '../../redux/action';


class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
        }
    }
    onClosePress = () => {
        this.props.clearEmployee()
        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          });
    }
    renderEmployees = () => {
        return this.props.employeeState.employeeList.map((employee, index) => {
            return <View key={index} style={[{ height: 46, width: 46, borderColor: 'white', borderWidth: 1, borderRadius: 23, backgroundColor: 'grey', zIndex: index, justifyContent: 'center', alignItems: 'center' }, index == 0 ? {} : { marginLeft: -10 }]}>
            </View>
        })
    }
    render() {
        return (
            <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
                <Header text={this.props.employeeState.title} />
                <ScrollView>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', margin: 20 }}>{this.props.employeeState.title}</Text>

                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', margin: 20 }}>Assignees</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                        {this.renderEmployees()}
                        <View style={[{ height: 46, width: 46, borderColor: 'white', borderWidth: 1, borderRadius: 23, backgroundColor: 'blue', zIndex: this.props.employeeState.employeeList.length, justifyContent: 'center', alignItems: 'center' }, { marginLeft: -10 }]}>

                            <View style={{ flexDirection: 'row' }}>
                                <Ionicons name='md-add' color="white" size={20} />
                                <Text style={{ color: 'white', fontSize: 16 }}>{this.props.employeeState.employeeList.length}</Text>
                            </View>

                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', margin: 20, alignItems: 'center' }}>
                        <Ionicons name='md-calendar' color="grey" size={30} />
                        <Text style={{ color: 'grey', fontSize: 16, marginLeft: 10 }}>{this.props.employeeState.dueDate}</Text>
                    </View>

                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', margin: 20 }}>Description</Text>
                    <Text style={{ color: 'grey', fontSize: 16, marginLeft: 20 }}>{this.props.employeeState.description}</Text>

                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', margin: 20 }}>Attachment</Text>

                    <View style={{ margin: 20, borderWidth: 1, borderRadius: 2, borderColor: 'grey', padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons name='md-attach' color="black" size={20} />
                            <Text style={{ marginLeft: 10 }}>File-name-example.docx</Text>
                        </View>

                    </View>

                </ScrollView>

                <Button
                    buttonName={'Close task'}
                    onPress={this.onClosePress}
                />

            </SafeAreaView>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearEmployee: () => dispatch(clearEmployee())
    }
}

const mapStateToProps = (state) => {
    return {
        employeeState: state.EmployeeState

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)