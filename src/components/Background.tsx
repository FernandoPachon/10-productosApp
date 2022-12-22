import React from 'react'
import { View,Text,StyleSheet } from 'react-native'


export const Background = () => {
  return (
<View style={styles.container}>
     <Text>Background </Text>
</View>
 )
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
});
export default Background;
