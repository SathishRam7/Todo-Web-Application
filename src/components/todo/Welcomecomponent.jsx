import { useParams, Link} from 'react-router-dom'

import { useState } from 'react';
import { retrivehelloworld,retrivehelloworldpath } from './api/Helloworldapiservice';
import { useAuth } from './security/Authcontext';
export default function Welcomecomponent(){
    const {username}=useParams();

const [message,setmessage]=useState(null);
const authcontext=useAuth()

function callhelloworldapi(){

retrivehelloworldpath('in28minutes',authcontext.token).then((response)=> successfulresponse(response))
.catch((error)=>erroresponse(error)).finally(()=>console.log('cleanup'))

}

function successfulresponse(response){
    console.log(response)
  //  setmessage(response.data) 
  setmessage(response.data.message)

}
function erroresponse(error){
    console.log(error)
}


    return(
       
        <div className="Welcome">
              <h1>welcome {username}</h1>
          <div>Manage your todos-<Link to="/todos">Go here</Link></div>
      <div>
        <button className="btn btn-success m-5" onClick={callhelloworldapi}>Call hello world </button>
      </div>
      <div className='text-info'>{message}</div>
      
        </div>
    )
}
