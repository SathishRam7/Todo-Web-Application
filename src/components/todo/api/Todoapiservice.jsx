import { apiclient } from "./Apiclient"


export const retriveallapi=(username)=>
    apiclient.get(`http://localhost:8080/users/${username}/todos`)


export const deletetodoapi=(username,id)=>
    apiclient.delete(`http://localhost:8080/users/${username}/todos/${id}`)

export const retrivetodoapi=(username,id)=>
    apiclient.get(`http://localhost:8080/users/${username}/todos/${id}`)


export const updatetodoapi=(username,id,todo)=>
    apiclient.put(`http://localhost:8080/users/${username}/todos/${id}`,todo)

export const createtodoapi=(username,todo)=>
    apiclient.post(`http://localhost:8080/users/${username}/todos`,todo)
