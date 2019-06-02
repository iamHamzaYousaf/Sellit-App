import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { navigatorDrawer, navigatorDeepLink, gridTwoColumns } from '../../utils/misc';

class Home extends Component{
  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent((event)=>{
      navigatorDeepLink(event,this)
      navigatorDrawer(event,this)
    })
  }

  render() {
    return (
      <Text> Home </Text>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
 
});
