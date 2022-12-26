import React from 'react'
import { View,Text,StyleSheet, ActivityIndicator } from 'react-native'
import Background from '../components/Background';


export const LoadingScreen = () => {
  return (
<View style={styles.container}>
     <ActivityIndicator
     size={50}
     color="#039DEA"
     />
</View>
 )
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#2D4F76"
    },
});
export default LoadingScreen;
