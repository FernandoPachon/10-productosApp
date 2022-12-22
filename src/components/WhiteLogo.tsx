import React from 'react'
import { View,Text,StyleSheet,Image } from 'react-native'


export const WhiteLogo = () => {
  return (
<View style={styles.container}>
     <Image
        source={require('../assets/react-logo-white.png')}
        style={{
            width:110,
            height:100
        }}
     />
</View>
 )
};


const styles = StyleSheet.create({
    container: {
    alignItems:'center'
    },
});
export default WhiteLogo;
