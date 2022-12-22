import React from 'react'
import { View,Text,StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Background from '../components/Background';
import WhiteLogo from '../components/WhiteLogo';
import { loginStyles } from '../theme/loginTheme';


export const LoginScreen = () => {
  return (
<>
     <Background/>
     <WhiteLogo/>
     <Text style={loginStyles.title}> Login </Text>
     <Text style={loginStyles.label}> Email </Text>
     <TextInput
      placeholder='Ingrese su email'
      placeholderTextColor="rgba(255,255,255,0.4)"
      keyboardType='email-address'
      underlineColorAndroid="white"
      style={loginStyles.inputField}
      selectionColor="white"
      autoCapitalize='none'
      autoCorrect={false}
     />
     <Text style={loginStyles.label}> Contraseña </Text>
     <TextInput
      placeholder='************'
      placeholderTextColor="rgba(255,255,255,0.4)"
      underlineColorAndroid="white"
      style={loginStyles.inputField}
      selectionColor="white"
     />
     <View style={loginStyles.buttonContainer}>
      <TouchableOpacity>
        
      </TouchableOpacity>
     </View>
</>
 )
};
export default LoginScreen;
