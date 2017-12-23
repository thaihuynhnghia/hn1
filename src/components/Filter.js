import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';


class Filter extends Component<{}> {

  getTextStyle(statusName){

    const {myFilterStatus} = this.props;

    if (statusName === myFilterStatus) return {color: 'yellow', fontWeight:'bold'};

    return statusName.buttonText;

  }
  
  setFilterStatus(actionType){
    this.props.dispatch({ type: actionType });
  }

  render() {
    return (
      
        
            <View style={ styles.container }>
                
                <TouchableOpacity onPress={() => this.setFilterStatus('FILTER_SHOW_ALL') } >
                    <Text style={ this.getTextStyle('SHOW_ALL')  }>SHOW ALL</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setFilterStatus('FILTER_MEMORIZED') } >
                    <Text style={ this.getTextStyle('MEMORIZED')  }>MEMORIZED</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setFilterStatus('FILTER_NEED_PRACTICE') } >
                    <Text style={ this.getTextStyle('NEED_PRACTICE')   }>NEED PRATICE</Text>
                </TouchableOpacity>
                
            </View>
        
      
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#583C3C', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'
        
    },
    buttonText: { color: 'white'}
});

function mapStateToProps(state){

    return { myFilterStatus: state.filterStatus }
};

export default connect(mapStateToProps) (Filter); 