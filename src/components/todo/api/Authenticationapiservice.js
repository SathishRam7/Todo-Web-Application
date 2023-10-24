import { apiclient } from "./Apiclient"
export const executebasicauth=(token)=>
    apiclient.get(`/basicauth`,{
headers:{
Authorization:token
}

    })


    export const executejwtauth=(username,password)=>
    apiclient.post(`/authenticate`,
    {username,password}
)