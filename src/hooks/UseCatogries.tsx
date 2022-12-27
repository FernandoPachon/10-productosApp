import React ,{useState }from 'react'
import { View,Text,StyleSheet } from 'react-native'



export const UseCatogries = () => {

    const [categories, setCategories] = useState([])
  return (
<View style={styles.container}>
     <Text>UseCatogries </Text>
</View>
 )
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
});
export default UseCatogries;
