import {FlatList,Text} from 'react-native'
import React,{useState} from 'react'
import {FloatAddbtn, Screencontainer } from '../style/BasicStyle'
import Icon from 'react-native-vector-icons/AntDesign'
import YearCard from '../Card'
import data from '../data.json'

import { Searchbar } from 'react-native-paper'



export default function YearsScreen() {

// const onChangeSearch=((e)=>{
//   setsearch(e.target)
//   c
// })

  return (
    <Screencontainer color="pink">
    <Searchbar placeholder="Search"
    />
    <FlatList
    data={data.data}
      
        // keyExtractor={(key)=>{console.log(key.key)}}
        renderItem={({item}) =>
        <YearCard
        Year={item.Year} 
        Course={item.Course} 
        Branch={item.Branch}
        Semester={item.Semester} 

        />}
      />
      <FloatAddbtn><Icon name='plus' style={{padding:20}} /></FloatAddbtn>
    </Screencontainer>
      
  )
}