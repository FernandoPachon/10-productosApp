import React from 'react'
import { View,Text,StyleSheet } from 'react-native'


export const Background = () => {
  return (
<View 
style={{
    position:'absolute',
    backgroundColor:'#5856D6',
    top:-150,
    width:700,
    height:850,
    transform:[
        {rotate:'-60deg'}
    ]
}}
/>
   
 )
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
});
export default Background;
