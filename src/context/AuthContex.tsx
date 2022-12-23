import { createContext } from "react";
import { Usuario } from "../interfaces/appInterfaces";

type AuthContextProps={
    errorMessage?: string;
    token:string |null;
    user:Usuario |null;
    status:'checking'|'authenticated'|'not-authenticated';

}
const AuthContext=createContext({})