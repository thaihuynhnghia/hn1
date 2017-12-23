import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

import { connect } from 'react-redux';


class Form extends Component<{}> {
  constructor (props){

    super(props);
    this.state = {
        en: '',
        vn: '',

    };

    this.onAdd = this.onAdd.bind(this);

  }

  onAdd() {
    const {en, vn } = this.state;
    this.props.dispatch({
        type: 'ADD_WORD',
        en,
        vn,

    });
  }

  render() {
    return (
            
            <View style = { styles.container} >
                <TextInput style={styles.textInput}
                           value = {this.state.en}
                           onChangeText = { text => this.setState ({en: text }) }
                           placeholder = "englisd word"
                ></TextInput>
                <TextInput
                           style={styles.textInput}
                           value = {this.state.vn} 
                           onChangeText = { text => this.setState ({vn: text }) }          
                ></TextInput>
                <TouchableOpacity onPress = {this.onAdd}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
      
    );
  }
}


const styles = StyleSheet.create({
    textInput : {
        height : 50,
        width: 300, 
        backgroundColor: '#E4F6D4',
        margin: 10,
        
    },
    container: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'

    }
});

export default  connect() (Form);