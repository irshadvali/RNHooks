/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
function HomeScreen() {
  const [data, setData] = useState({name: 'irshad'});
  changeData = () => {
    console.log('====================');
    setData({name: 'vali'});
  };
  return (
    <View style={styles.container}>
      <Text>{data.name}</Text>
      <TouchableOpacity onPress={changeData}>
        <View
          style={{
            height: 50,
            width: 200,
            backgroundColor: '#d00000',
            marginTop: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>click</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default HomeScreen;
