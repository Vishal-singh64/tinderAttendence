import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ButtonHolder, Buttons, DataHolder, Picturecontainer, Picturedata, Screencontainer } from '../style/SwipeStyle'
import { FloatAddbtn } from '../style/BasicStyle'
import Icon from 'react-native-vector-icons/AntDesign'

const SwipeButtons=()=>{
  return(
    <View>
      
        <FloatAddbtn Icon='back' ></FloatAddbtn>
      
    </View>
  )
}

export default function SwipeScreen() {
  return (
    <Screencontainer>
    <Picturecontainer>

        <DataHolder>

        <Picturedata>Vishal Singh</Picturedata>
        <Picturedata>1906164</Picturedata>
        </DataHolder>    
    </Picturecontainer>
   
    <Buttons><Icon name='back' size={28}/></Buttons>
   
    </Screencontainer>
  )
}