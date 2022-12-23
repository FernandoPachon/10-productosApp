import React, { useContext,useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Alert
} from 'react-native';
import Background from '../components/Background';
import WhiteLogo from '../components/WhiteLogo';
import {loginStyles} from '../theme/loginTheme';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContex';

interface Props extends StackScreenProps<any,any>{}

export const LoginScreen = ({navigation}:Props) => {
  const {singIn,errorMessage,removeError}= useContext(AuthContext)
  const {email,password,onChange}=useForm({
    email:'',
    password:'',
  });
  useEffect(() => {
      if(errorMessage?.length===0)return;
      Alert.alert(
        'Error al conectarse ❌', 
        errorMessage,
        [
          {
            text:'Ok',
            onPress:removeError
          }
        ]
        );
  }, [errorMessage])
  
  const onLogin =()=>{
    console.log({email,password,onChange});
    Keyboard.dismiss()
    singIn({correo:email,password});
  }
  return (
    <>
      <Background />
      <KeyboardAvoidingView
        style={{flex:1}}
        behavior={'height'}
      >
      <View style={loginStyles.formContainer}>
        <WhiteLogo />
        <Text style={loginStyles.title}> BATTLENET </Text>
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
          onSubmitEditing={onLogin}
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
          onSubmitEditing={onLogin}
        />
        <View style={loginStyles.buttonContainer}>
          <TouchableOpacity 
          activeOpacity={0.8} 
          style={loginStyles.button}
          onPress={onLogin}
          >
            <Text style={loginStyles.buttonText}>Conectarse</Text>
          </TouchableOpacity>
        </View>
        <View style={loginStyles.newUserContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.replace('RegisterScreen')}>
            <Text style={loginStyles.buttonText}>Registrarse </Text>
          </TouchableOpacity>
        </View>
      </View>
      </KeyboardAvoidingView>
    </>
  );
};
export default LoginScreen;
