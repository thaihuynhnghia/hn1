import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';


class Header extends Component<{}> {
  
  render() {
    return (
            
            <View style={ styles.header}>
                <Text/>
                <Text>MY WORD</Text>
                <TouchableOpacity onPress = {() => this.props.dispatch({ type: 'TOGGLE_IS_ADDING'}) } >
                    <Text>ADD</Text>
                </TouchableOpacity>
            </View>
      
    );
  }
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: 'blue',
        flex:1, 
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    
});

export default connect() (Header);