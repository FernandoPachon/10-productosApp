import React from 'react'
import { View,Text,StyleSheet } from 'react-native'


export const Background = () => {
  return (
<View 
style={{
    position:'absolute',
    backgroundColor:'#2D4F76',
    //top:-150,
    width:700,
    height:900,
   /*  transform:[
        {rotate:'10deg'}
    ] */
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
