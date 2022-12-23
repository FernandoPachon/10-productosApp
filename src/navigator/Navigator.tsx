import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProtectedScreen from '../screens/ProtectedScreen';
import { AuthContext } from '../context/AuthContex';

const Stack = createStackNavigator();

export const Navigator=()=> {
  const {status} = useContext(AuthContext)
  status==='authenticated'
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false,
            cardStyle:{
                backgroundColor:"white"
            }
        }}
    >
      {
        status!=='authenticated'
        ?(
          <>
            <Stack.Screen name="LoginScreen" component={LoginScreen} /> 
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> 
          </>
        )
        :(
          <>
            <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
          </>
        )
      }
       
        
    </Stack.Navigator>
  );
}