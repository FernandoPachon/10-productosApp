import React, { useContext, useEffect } from 'react'
import { View,Text,StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ProductsContext from '../context/ProductsContext';
import { StackScreenProps } from '@react-navigation/stack';
import { ProductsStackParams } from '../navigator/ProductsNavigator';

interface Props extends StackScreenProps<ProductsStackParams,'ProductsScreen'>{}
export const ProductsScreen = ({navigation}:Props) => {
    const{products,loadProducts}=useContext(ProductsContext)
    useEffect(() => {
        navigation.setOptions({
            headerRight:()=>(
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{marginRight:10}}
                    onPress={
                        ()=>navigation.navigate('ProductScreen',{})}
                >
                    <Text>Agregar  </Text>
                </TouchableOpacity>
            )
        })
    }, [])
    
  return (
<View style={styles.container}>
     <FlatList
        data={products}
        keyExtractor={(p)=>p._id}
        renderItem={({item})=>(
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={
                    ()=>navigation.navigate('ProductScreen',{
                    id:item._id,
                    name:item.nombre
                })
            }
            >
                <Text style={styles.productName}>{item.nombre}</Text>
            </TouchableOpacity>
        )}
        ItemSeparatorComponent={()=>(
            <View style={styles.itemSeparet}/>
        )}
/>
</View>
 )
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginHorizontal:5
    },
    productName:{
        fontSize:20,
    },
    itemSeparet:{
        borderBottomWidth:2,
        marginVertical:5,
        borderBottomColor:"rgba(0,0,0,0.1"
    }
});
export default ProductsScreen;
