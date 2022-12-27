import React, { useContext, useEffect } from 'react'
import { View,Text,StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native'
import  Icon  from 'react-native-vector-icons/Ionicons';
import { loginStyles } from '../theme/loginTheme';
import WhiteLogo from '../components/WhiteLogo';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContex';


interface Props extends StackScreenProps<any,any>{}

export const RegisterScreen = ({navigation}:Props) => {

  const {signUp,errorMessage,removeError}=useContext(AuthContext)

  const {email,password,onChange,name}=useForm({
    email:'',
    password:'',
    name:''
  });
  useEffect(() => {
    if( errorMessage.length === 0 ) return;

    Alert.alert( 'Registro incorrecto', errorMessage,[{
        text: 'Ok',
        onPress: removeError
    }]);

}, [ errorMessage ])
  const onRegister =()=>{
    console.log({email,password,name});
    Keyboard.dismiss()
    signUp({
      nombre:name,
      correo:email,
      password
    })
  }
  return (
    <>
      
      <KeyboardAvoidingView
        style={{flex:1,backgroundColor:"#2C3947"}}
        behavior={'height'}
      >
      <View style={loginStyles.formContainer}>
        <WhiteLogo />
        <Text style={loginStyles.title}> REGISTRO </Text>
        <Text style={loginStyles.label}> Nombre</Text>
        <TextInput
          placeholder="Ingrese su nombre"
          placeholderTextColor="rgba(255,255,255,0.4)"
          underlineColorAndroid="white"
          style={loginStyles.inputField}
          selectionColor="white"
          onChangeText={(value)=>onChange(value,'name')}
          value={name}
          onSubmitEditing={onRegister}
          autoCapitalize="words"
          autoCorrect={false}
        />
        <Text style={loginStyles.label}> Email </Text>
        <TextInput
          placeholder="Ingrese su email"
          placeholderTextColor="rgba(255,255,255,0.4)"
          keyboardType="email-address"
          underlineColorAndroid="white"
          style={loginStyles.inputField}
          selectionColor="white"
          onChangeText={(value)=>onChange(value,'email')}
          value={email}
          onSubmitEditing={onRegister}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={loginStyles.label}> Contraseña </Text>
        <TextInput
          placeholder="************"
          placeholderTextColor="rgba(255,255,255,0.4)"
          underlineColorAndroid="white"
          secureTextEntry
          style={loginStyles.inputField}
          selectionColor="white"
          onChangeText={(value)=>onChange(value,'password')}
          value={password}
          onSubmitEditing={onRegister}
        />
        <View style={loginStyles.buttonContainer}>
          <TouchableOpacity 
          activeOpacity={0.8} 
          style={loginStyles.button}
          onPress={onRegister}
          >
            <Text style={loginStyles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
        
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.replace('LoginScreen')}
            style={loginStyles.buttonReturn}
            >
            <Icon
              name='chevron-back'
              size={30}
              color="white"
            />
          </TouchableOpacity>
        
      </View>
      </KeyboardAvoidingView>
    </>
  );
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
});
export default RegisterScreen;
