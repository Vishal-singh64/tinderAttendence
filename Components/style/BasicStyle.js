import styled from "styled-components";

export const Screencontainer=styled.View`
flex: 1;
justify-content: center;
margin-top: 50px;
width:400px;
background-color: ${props=>props.color};
align-self: center;
`

export const Heading=styled.Text`
color: pink;
font-size: 80px;
align-self: center;
`
export const SubHeading=styled.Text`
color: white;
font-size: 13px;
align-self: center;
`
export const SignInButton=styled.TouchableOpacity`
background-color: whitesmoke;
padding: 20px;
width: 250px;
border-radius: 30px;
align-items: center;
font-size: 13px;
align-self: center;
position: absolute;
bottom: 70px;
`
 //cards at 2nd Screen 
export const CardBody=styled.TouchableOpacity`
padding:10px;
margin: 10px;
height: 150px;
width: 370px;
border-radius: 25px;
background-color:whitesmoke;
`
export const BatchContainer=styled.Text`
color: green;
font-size: 15px;
`
export const ClassContainer=styled.Text`
color: crimson;
font-size: 30px;
`
export const FloatAddbtn=styled.TouchableOpacity`
height: 8%;
width: 16%;
box-shadow: 5px 5px black ;
justify-content: center;
background-color: green;
align-items: center;
position: absolute;
bottom: 20px;
right: 20px;
border-radius: 50px;

`