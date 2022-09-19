import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import Onboard from './Components/screens/loginScreen';
import SwipeScreen from './Components/screens/SwipeScreen';
// import YearsScreen from './Components/screens/YearsScreen';

export default function App() {
  return (
    <View style={styles.container}>
    {/* <Text>test</Text> */}
      {/* <Onboard/> */}
      {/* <Text>haii test</Text> */}
      {/* <YearsScreen/> */}
      <SwipeScreen />
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
``