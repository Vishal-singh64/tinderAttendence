import styled from "styled-components";

export const Screencontainer=styled.View`
display: flex;
justify-content: center;
align-items: center;
width:100%;
height: 100%;
background-color: pink;
`
export const Picturecontainer=styled.View`
display: flex;
justify-content: center;
align-items: center;
border-radius: 25px;
height: 60%;
width:90%;
background-color: wheat;
`
export const Picturedata=styled.Text`
display: flex;
color: white;
font-size: 24px;
justify-content: flex-end;
bottom: 10px;
`
export const DataHolder=styled.View`
display: flex;
justify-content: center;
align-items: center;
background-color: black;
height: 20%;
width: 100%;
opacity: 0.4;
position: absolute;
bottom: 0px;
border-bottom-left-radius: 25px;
border-bottom-right-radius: 25px;
`
// export const ButtonHolder=styled.View`
// display: flex;
// flex-direction: row;
// /* height: 9%; */
// position: absolute;
// bottom: 8%;
// `
export const Buttons=styled.TouchableOpacity`
display: flex;
align-items: center;
justify-content: center;
height: 10%;
width: 20%;
border-radius: 40px;
background-color: whitesmoke;
position: absolute;
bottom: 8%;
`
