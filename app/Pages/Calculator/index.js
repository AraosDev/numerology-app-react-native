import React, { Component } from 'react'
import CalculatorConfig from '../../Common/CalculatorConfig'
import { dateFormatter } from '../../Common/Common Helpers'
import { ScrollView } from 'react-native-gesture-handler';
import { View, AppState, Text, StyleSheet, SafeAreaView, TextInput, Button } from 'react-native';
import { Headline, Card, Title, Paragraph } from 'react-native-paper';
import Header from '../../Components/Header';
import DatePickerComp from '../../Components/DatePickerComp';

const ResultComponent = ({config, isSubmitted})=>{
    if(isSubmitted)
    return(
        <>
            <Headline style={styles.subheading}>Your Result: </Headline>
            <SafeAreaView style={{flex: 10, backgroundColor:'#383838',paddingHorizontal:20, marginBottom: 20 }}>
                <View style={{ flex: 1, flexDirection:'column' }}>
                    {
                        config.map(item=>
                            <Card key={item.Type} style={{flex:1, marginBottom: 10, backgroundColor: 'black'}}>
                                <Card.Content>
                                    <Title style={{color:'white'}}>{item.Type}</Title>
                                    <Paragraph style={{color:'white', textAlign:'center', fontSize: 30, paddingVertical: 10}}>{item.Number}</Paragraph>
                                    <Paragraph style={{color:'white'}}>{item.Benefits}</Paragraph>
                                </Card.Content>
                            </Card>
                        )
                    }
                </View>
            </SafeAreaView>
        </>
    )
    else return(<></>)
}

export default class Calculator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            pickerDate: dateFormatter(new Date()),
            userName: '',
            config: CalculatorConfig(),
            isSubmitted: false,
            appState: AppState.currentState
        }

        this.dateChangeHandler = this.dateChangeHandler.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClear = this.onClear.bind(this);
    }

    componentDidMount() {
        AppState.addEventListener("change", this._handleAppStateChange);
    }

    componentWillUnmount() {
        AppState.removeEventListener("change",this. _handleAppStateChange);
    }

    _handleAppStateChange = nextAppState => {
        if (
          this.state.appState.match(/inactive|background/) &&
          nextAppState === "active"
        ) {
            this.onClear();
        }
        this.setState({ appState: nextAppState });
      };

    dateChangeHandler = (date)=>{
        this.setState({pickerDate: date})
    }

    inputChangeHandler = (text)=>{
        this.setState({userName: text})
    }

    onSubmit = ()=>{
        this.setState((state, props)=>{
            return {
                ...state,
                isSubmitted:  true,
                config: CalculatorConfig(state.pickerDate, state.userName)
            }
        })
    }

    onClear = ()=>{
        this.setState({
            isSubmitted: false,
            userName: '',
            pickerDate: dateFormatter(new Date()),
            config: CalculatorConfig()
        });
    }

    
    render() {
        return (
            <>
            <Header title='Calculator' />
            <ScrollView style={styles.totalHome}>
                <Headline style={styles.subheading}>Type in your details:</Headline>
                <View style={styles.datePickerView}>
                    <DatePickerComp
                        label='Select Your Date Of Birth:'
                        style={{flex:1, color: 'white'}}
                        date={this.state.pickerDate}
                        mode="date"
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        maxDate={dateFormatter(new Date())}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        onDateChange={this.dateChangeHandler}
                    />
                    <View style={styles.name}>
                        <TextInput style={styles.nameInput} value={this.state.userName} onChangeText={this.inputChangeHandler} placeholder='Type your Name' placeholderTextColor='white' />
                    </View>
                    <View style={styles.submit}>
                        <Button onPress={this.onSubmit} title='Calculate' style={styles.btn} color='#737373' />
                        <Button onPress={this.onClear} title='Reset' style={styles.btn} color='#737373' />
                    </View>
                </View>
                <ResultComponent config={this.state.config} isSubmitted={this.state.isSubmitted} />
            </ScrollView>
        </>
        )
    }
}

const styles = StyleSheet.create({
    totalHome:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#383838'
    },
    datePickerView:{
        flex: 2,
        paddingHorizontal: 30, 
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'flex-start',
    },
    name:{
        flex: 1,
        width: '100%'
    },
    nameInput:{
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        color: "white"
    },
    submit:{
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems:'center',
        flexDirection: 'row',
        padding: 10,
        width: '100%',
    },
    btn:{
        flex: 1,
        color: 'white',
        backgroundColor: '#383838',
    },
    subheading: {
        flex: 1,
        padding:10,
        fontSize:20,
        color:'white'
    }
})
