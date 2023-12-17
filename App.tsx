/* eslint-disable jsx-quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */


import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';






function App(){
  return (
    <SafeAreaView >
      <View>
        <Text>HelloWorld!</Text>
        <Text>Hello BKL !</Text>
        <Button
        title='Learn More'
        color='#000'
        onPress={()=>Alert.alert('yohoho')}/>
      </View>
    </SafeAreaView>
  );
}


export default App;
