import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import Header from '../Componets/Header'
import { Ionicons } from '@expo/vector-icons';
import Button from '../Componets/Button'
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux'
import { createTask } from '../../redux/action';
import styles from './styles'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            dueDate: 'Due date',
            employeeList: [],
            description: '',
            attachment: '',
            showAttachment: false

        }
    }

    onChangeText = (text) => {
        this.setState({
            title: text
        })
    }
    onChangeDescription = (text) => {
        this.setState({
            description: text
        })
    }
    renderEmployees = () => {
        return this.props.employeeList.map((employee, index) => {
            return <View key={index} style={[styles.roundOverlap,{zIndex:index}, index == 0 ? {} : styles.roundOverlapmargin]}/>
        })
    }
    checkEmpty=(data)=>{
        if(typeof data === 'string'){
            return data === ''
        }

        return data.length === 0
    }
    checkValidation = (data) =>{
        for (const prop in data) {
         if(this.checkEmpty(data[prop])){
            alert('please enter all the data')
            return false
            break;
         }          
        }   
        
        return true
    }
    onButtonPress = () => {
        let data = {
            title: this.state.title,
            dueDate: this.state.dueDate,
            employeeList: this.props.employeeList,
            description: this.state.description,
            attachment: this.state.attachment,
        }
        if(this.checkValidation(data)){
            this.props.createTask(data)
            this.props.navigation.navigate("Details")
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Header text={'Create Task'} />

                <ScrollView style={styles.container}>

                    <Text style={styles.summerytext}>
                        Summery
                    </Text>

                    <TextInput
                        style={styles.titleText}
                        placeholder={'Title'}
                        placeholderTextColor={'grey'}
                        onChangeText={this.onChangeText}
                        value={this.state.title}
                    />

                    <TouchableOpacity
                        onPress={
                            () => {
                                // Need to write custom calender component as per the UI. 
                                // Which is again a saperate task.
                                let today = new Date();
                                let date = today.getDate() + "." + parseInt(today.getMonth() + 1) + "." + today.getFullYear();
                                this.setState({
                                    dueDate: date
                                })
                            }
                        }
                        style={styles.dateContainer}>

                        <Text style={styles.dateText}>
                            {this.state.dueDate}
                        </Text>

                        <Ionicons name='md-calendar' color="grey" size={20} />


                    </TouchableOpacity>

                    <View style={styles.employeeContainer}>
                        <Text style={styles.employeeText}>
                            Employee
                        </Text>

                        {this.props.employeeList && this.props.employeeList.length === 0 && <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate("Employee")
                            }}
                            style={styles.assignContainer}>
                            <Ionicons name='md-add' color="blue" size={20} />

                            <Text style={styles.assignText}>
                                Assign
                            </Text>
                        </TouchableOpacity>}

                    </View>

                    {this.props.employeeList.length > 0 && <View style={styles.listContainer}>
                        { this.renderEmployees()}
                        <View style={[styles.roundOverlap,{backgroundColor:'blue',zIndex: this.props.employeeList.length}, styles.roundOverlapmargin]}>
                            <Ionicons name='md-add' color="white" size={20} /> 
                        </View>
                    </View>}

                    <Text style={styles.descriptionText}>Description</Text>

                    <TextInput
                        style={styles.desTextinput}
                        placeholder={'Description'}
                        placeholderTextColor={'grey'}
                        onChangeText={this.onChangeDescription}
                        value={this.state.description}
                        multiline={true}
                    />

                    <View style={styles.attachContainer}>
                        <Text style={styles.attachText}>
                            Attachment
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    showAttachment: true,
                                    attachment: 'File-name-example.docx'
                                })
                            }}
                            style={styles.addContainer}>

                            <Ionicons name='md-attach' color="blue" size={20} />

                            <Text style={styles.addText}>
                                Add
                            </Text>
                        </TouchableOpacity>

                    </View>

                    {this.state.showAttachment && <View style={styles.fileContainer}>
                        <View style={styles.viewContainer}>
                            <Ionicons name='md-attach' color="black" size={20} />
                            <Text style={styles.fileText}>File-name-example.docx</Text>
                        </View>
                        <Ionicons name='md-trash' color="red" size={20} />

                    </View>}

                </ScrollView>

                <Button
                    buttonName={'Create task'}
                    onPress={this.onButtonPress}
                />
            </SafeAreaView>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTask: (data) => dispatch(createTask(data))
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        employeeList: state.EmployeeState.employeeList
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home) 