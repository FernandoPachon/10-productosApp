import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {StackScreenProps} from '@react-navigation/stack';
import {ProductsStackParams} from '../navigator/ProductsNavigator';

interface Props
  extends StackScreenProps<ProductsStackParams, 'ProductScreen'> {}
export const ProductScreen = ({route, navigation}: Props) => {
  const {id, name = ''} = route.params;

  const [selectedLanguage, setSelectedLanguage] = useState();

  useEffect(() => {
    navigation.setOptions({
      title: name ? name : 'Nuevo producto',
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Nombre del producto:</Text>
        <TextInput placeholder="Producto" style={styles.textInput} />
        <Text style={styles.label}>Categoría</Text>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Paldin" value="pd" />
          <Picker.Item label="Brujo" value="br" />
          <Picker.Item label="Mago" value="mg" />
          <Picker.Item label="Sacerdote" value="sc" />
          <Picker.Item label="Druida" value="dr" />
          <Picker.Item label="Chaman" value="ch" />
          <Picker.Item label="Picaro" value="pi" />
          <Picker.Item label="Cazador" value="cz" />
          <Picker.Item label="Caballero de la muerte" value="dk" />
        </Picker>
        <Button title="Guardar" onPress={() => {}} color="5856D6" />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Button title="Cámara" onPress={() => {}} color="5856D6" />
          <Button title="Galería" onPress={() => {}} color="5856D6" />
        </View>
      </ScrollView>
      <Text>
        {id}
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
  },
  label: {
    fontSize: 18,
  },
  textInput: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 45,
    marginTop: 5,
    marginBottom: 10,
  },
});
export default ProductScreen;
