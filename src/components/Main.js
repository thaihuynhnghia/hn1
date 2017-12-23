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
import Word from './Word';
import Filter from './Filter';
import Header from './Header';
import Form from './Form';
 class Main extends Component<{}> {
  
  getWordList(){
    const { myFilter, myWords} = this.props;
    
    if (myFilter === 'MEMORIZED') return myWords.filter( e => e.memorized );

    if (myFilter === 'NEED_PRACTICE') return myWords.filter( e => !e.memorized );
    
    return myWords;
  }
  render() {
    return (
      
        <View style={{backgroundColor: 'yellow',flex: 1, alignSelf: 'stretch', justifyContent: 'center'}}>
            
            <Header/>
            <View style={{ flex: 10, }}>
            {this.props.myIsAdding ? <Form/> : null }
            <FlatList 
                data = {this.getWordList() }
                renderItem = { ( {item} ) => <Word myWord={item} /> }
                keyExtractor = { item => item.id}
            />
            </View>
            <Filter />
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

function mapStateToProps(state) {

    return { 
        myFilter: state.filterStatus,
        myWords: state.arrWords,
        myIsAdding: state.isAdding,    
    
    };
};

export default connect ( mapStateToProps ) (Main) ;
