import { createContext, useContext, useState } from "react";
import { executebasicauth ,executejwtauth} from "../api/Authenticationapiservice";
import { apiclient } from "../api/Apiclient";

export const Authcontext=createContext()
export const useAuth=()=>useContext(Authcontext)

export default function Authprovider({children}){

    const[isauthenticated,setauthenticated]=useState(false)
    const[username,setusername]=useState(null)
    const[token,settoken]=useState(null)
//setInterval(  ()=>setnumber(number+1) ,10000)
// function login(username,password){
  
//     if(username==='in28minutes' && password==='siva'){
//  setauthenticated(true)
//  setusername(username)
//  return true
// }else{
// setauthenticated(false)
// setusername(null)
// return false  
// }
// }

// async function login(username,password){
//  const batoken='Basic ' +window.btoa(username +":" +password)
//  try{
 
//  const response= await executebasicauth(batoken)
 
//     if(response.status==200){
//  setauthenticated(true)
//  setusername(username)
//  settoken(batoken)
// apiclient.interceptors.request.use(
//     (config)=>{
// console.log('intercept and and token')
// config.headers.Authorization=batoken
// return config
//     }
// )

//  return true
// }else{
// logout()
// return false  
// }}catch(error){
//    logout()
//     return false 
// }
// }



async function login(username,password){

    try{
    
    const response= await executejwtauth(username,password)
    
       if(response.status==200){
        const jwttoken='Bearer ' + response.data.token
    setauthenticated(true)
    setusername(username)
    settoken(jwttoken)
   apiclient.interceptors.request.use(
       (config)=>{
   console.log('intercept and and token')
   config.headers.Authorization=jwttoken
   return config
       }
   )
   
    return true
   }else{
   logout()
   return false  
   }}catch(error){
      logout()
       return false 
   }
   }
   



function logout(){
    setauthenticated(false)
    settoken(null)
    setusername(null)
}

    return(
<Authcontext.Provider value={{isauthenticated,login,logout,username,token}}>
    {children}
</Authcontext.Provider>
    )
}