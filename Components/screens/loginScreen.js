import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { Heading, SubHeading,Screencontainer, SignInButton } from '../style/BasicStyle';
import Icon from 'react-native-vector-icons/AntDesign'
const Onboard = () => {
  return (
    <Screencontainer color="crimson">


      <Heading>t-dance</Heading>
      <SubHeading>A new way of taking attendence</SubHeading>

      <SignInButton>
        <Text><Icon name='google' style={{padding:20}} /> Sign in With Google</Text>
        
      </SignInButton>
    </Screencontainer>

  )}
export default Onboard;