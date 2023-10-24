import { useState } from "react"
import { useNavigate} from 'react-router-dom'
import { useAuth } from "./security/Authcontext"
export default function Logincomponent(){
    const[username,setusername]=useState('in28minutes')
    
    function handleusername(event){
        setusername(event.target.value)
    }
    const[password,setpassword]=useState('')
    function handlepassword(event){
        setpassword(event.target.value)
    }
    
    const[showerrormessage,setshowerrormessage]=useState(false)
    
    const navigate=useNavigate();
    const authcontext=useAuth()

   async function handlesubmit(){
   
        if(await authcontext.login(username,password)){
  
    navigate(`/welcome/${username}`)
    }else{
        setshowerrormessage(true)
      
    }
    }
    
    return(
    
    <div className="Login">
        <h1>Time to Login !!!</h1>

      {showerrormessage &&  <div className="errormessage">Authentication failed bro! please try again </div>}
        <div className="Loginform">
    <div>
    <label>user name</label>
    <input type="text" name="username" value={username} onChange={handleusername}></input>
    </div>
    <div>
    <label>password</label>
    <input type="text" name="password" value={password} onChange={handlepassword}></input>
    </div>
    <div>
    
        <button type="button" name="login" onClick={handlesubmit}>login</button>
    </div>
        </div>
    </div>
    
    )
    }
    
    