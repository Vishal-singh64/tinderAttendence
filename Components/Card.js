import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { BatchContainer, CardBody, ClassContainer } from './style/BasicStyle'
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps'


export default function YearCard(props) {
  return (
  <CardBody bgColor={(props.CardColor)}>
    <ClassContainer>{props.Course} ({props.Branch}) {props.Semester}</ClassContainer>
    
    <BatchContainer>{props.Year}</BatchContainer>
    </CardBody>
  )
}