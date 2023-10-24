import './TodoApp.css'
import {BrowserRouter, Routes ,Route, Navigate} from 'react-router-dom'
import Logoutcomponent from './Logoutcomponent'
import Footercomponent from './Footercomponent'
import Headercomponent from './Headercomponent'
import Listtodocomponent from "./Listtodocomponent"
import Errorcomponent from "./Errorcomponent"
import Welcomecomponent from "./Welcomecomponent"
import Logincomponent from "./Logincomponent"
import Authprovider, { useAuth } from './security/Authcontext'
import { Children } from 'react'
import Todocomponet from './Todocomponent'

function Authenticatedroute({children}){
   const authcontext=useAuth()
   if(authcontext.isauthenticated){
      return children
   }
   return <Navigate to="/"/>
}


export default function TodoApp(){
    return (
<div className="TodoApp">
<Authprovider>
<BrowserRouter>
<Headercomponent></Headercomponent>
<Routes>
<Route path='/' element={<Logincomponent/>}> </Route>
    <Route path='/login' element={<Logincomponent/>}> </Route>


    <Route path='/welcome/:username' element={ 
    <Authenticatedroute>
    <Welcomecomponent/> </Authenticatedroute>}/> 
    
    <Route path='/todos' element={ 
       <Authenticatedroute>
    <Listtodocomponent/> </Authenticatedroute>}/> 

    
    <Route path='/todo/:id' element={ 
       <Authenticatedroute>
    < Todocomponet/> </Authenticatedroute>}/> 



    <Route path='/logout' element={ 
     <Authenticatedroute>
    <Logoutcomponent/></Authenticatedroute> }/>
        
         
    <Route path='*' element={ <Errorcomponent/> }> </Route>

</Routes>
<Footercomponent></Footercomponent>
</BrowserRouter>
</Authprovider>
</div>


    )
}
