import { apiclient } from "./Apiclient"

export const retrivehelloworld=()=>
    apiclient.get('http://localhost:8080/hello-world-bean')

export const retrivehelloworldpath=(username,token)=>
     apiclient.get(`/hello-world/path-variable/${username}`
//      ,{
// headers:{
// Authorization:token
// } }
)


