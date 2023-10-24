import { useEffect, useState } from "react"
import {deletetodo, deletetodoapi, retriveallapi} from "./api/Todoapiservice"
import { useAuth } from "./security/Authcontext"
import { useNavigate} from 'react-router-dom'

export default function Listtodocomponent(){
    const today=new Date()
const authcontext=useAuth()
const username=authcontext.username

const navigate=useNavigate();
   const targetDate=new Date(today.getFullYear()+12,today.getMonth(),today.getDay())
    
  const[todos,settodos]=useState([])
  // const todos=[
  //     // {id:1,description :'learn java',done: false,targetdate:targetdate},
  //     // {id:2,description :'learn c++',done:false,targetdate:targetdate},
  //     // {id:3,description :'learn python', done:false,targetdate:targetdate},
  // ]                     


  const[message,setmessage]=useState([])
  useEffect(
      ()=>refreshtodos(),[]
      ) 
   
    function refreshtodos()
    {
  retriveallapi(username).then(response=>{settodos(response.data)}).catch(error=>console.log(error))
    }   
    
    console.log(todos);
    function deletetodo(id)
    {
      console.log('clicked'+id)
      deletetodoapi(username,id).then(
        ()=>{
setmessage(`delete of todo with ${id} successful`)
refreshtodos()
        }
      ).catch(error=>console.log(error))
    }


    function updatetodo(id)
    {
      console.log('clicked'+id)
      navigate(`/todo/${id}`)

    }

    function addnewtodo ()
    {
      navigate(`/todo/-1`)

    }



  return(
          <div className="container">
              <h1>Things you want to do! </h1>
             {message &&  <div className="alert alert-warning">{message}</div>}
             
              <div>
                <table className="table">
           <thead>
              <tr>
              
                  <th>description</th>
                  <th>Is Done?</th>
                  <th>Target Date</th>
                  <th>Delete</th>
                  <th>Update</th>
              </tr>
           </thead>
  
        <tbody>
  {
          todos.map(todo =>(
              <tr key={todo.id}>
             
              <td>{todo.description}</td>
              <td>{todo.done}</td>
              <td>{ todo.targetDate}</td>
              
              <td><button className="btn btn-warning" onClick={()=>
                deletetodo(todo.id)}>Delete</button></td>
                    <td><button className="btn btn-success" onClick={()=>
                updatetodo(todo.id)}>Update</button></td>
              </tr>
          ))}
        </tbody>
  
                </table>
              </div>
              <div className="btn btn-success m-5 "onClick={addnewtodo}>Add new Todo</div>
          </div>
      )
  }
  
  