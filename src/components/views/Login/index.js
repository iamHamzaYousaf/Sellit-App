import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import LoadTabs from '../Tabs';

class Login extends Component{
  render() {
    return (
      <View>
        <Text> Login </Text>
        <Button title="go to home"
          onPress={()=>{
            LoadTabs();
          }}
        />
      </View>

    );
  }
}

export default Login;

const styles = StyleSheet.create({
 
});
