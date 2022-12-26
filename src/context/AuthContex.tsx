import { createContext, useReducer,useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginResponse, Usuario, LoginData } from '../interfaces/appInterfaces';
import { AuthState, authReducer } from './AuthReducer';
import cafeApi from "../api/cafeApi";


type AuthContextProps={
    errorMessage?: string;
    token:string |null;
    user:Usuario |null;
    status:'checking'|'authenticated'|'not-authenticate';
    singUp:()=>void;
    singIn:(LoginData:LoginData)=>void;
    logOut:()=>void;
    removeError:()=>void;
}
const authInitialState:AuthState={
    status:'checking',
    token:null,
    user:null,
    errorMessage:''
}
export const AuthContext=createContext({}as AuthContextProps);
export const AuthProvider=({children}:any)=>{
    const [state, dispatch] = useReducer(authReducer,authInitialState);
    useEffect(()=>{
       checkToken()
    },[])

    const checkToken=async()=>{
        const token =await AsyncStorage.getItem('token')
        if(!token) return dispatch({type:"notAuthenticated"})

        const resp= await cafeApi.get('/auth',)
        if(resp.status!==200){
            return dispatch({type:"notAuthenticated"})
        }
        dispatch({
            type:"singUP",
            payload:{
                token:resp.data.token,
                user:resp.data.usuario
            }
        })
    }
    const  singUp=()=>{};
    const  singIn=async({correo,password}:LoginData)=>{
        try {
            const {data}= await cafeApi.post<LoginResponse>('/auth/login',{correo,password})
            dispatch({
                type:'singUP',
                payload:{
                    token:data.token,
                    user:data.usuario
                }
            });

            await AsyncStorage.setItem('token',data.token)
            
        } catch (error) {
           console.log(error.response.data.msg);
           dispatch ({
            type:'addError',
            payload:error.response.data.msg || 'Información incorrecta'
        })
        }
    };
    const logOut=()=>{};
    const  removeError=()=>{
        dispatch({
            type:'removeError',
        })
    };
    return(
        <AuthContext.Provider value={{
            ...state,
            singIn,
            singUp,
            logOut,
            removeError
        }}>
            {children}
        </AuthContext.Provider>
    )
}