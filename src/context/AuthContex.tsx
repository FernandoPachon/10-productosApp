import { createContext, useReducer } from "react";
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
            })
            
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