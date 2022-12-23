import { createContext, useReducer } from "react";
import { Usuario } from "../interfaces/appInterfaces";
import { AuthState, authReducer } from './AuthReducer';

type AuthContextProps={
    errorMessage?: string;
    token:string |null;
    user:Usuario |null;
    status:'checking'|'authenticated'|'not-authenticate';
    singUp:()=>void;
    singIn:()=>void;
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
    const  singIn=()=>{};
    const logOut=()=>{};
    const  removeError=()=>{};
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