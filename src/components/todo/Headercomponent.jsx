import {Link} from 'react-router-dom'
import { useAuth, useauth } from './security/Authcontext'
export default function Headercomponent(){
//const authcontext=useContext(Authcontext)
//console.log(authcontext.number)
const authcontext=useAuth()
const isauthenticated=authcontext.isauthenticated

function logout(){
    authcontext.logout()
        }


    return(
        <header className="border-bottom border-light border-5 mb-5 p-2">
             <div className="container">
                <div className="row">
  <nav className="navbar navbar-expand-lg">
<a className="navbar-brand ms-2 fs-2 fw-bold text-black"  href="/welcome/in28minutes">PS</a>
           <div className="collapse navbar-collapse">
           <ul className="navbar-nav">
           <li  className="nav-item" >
            {isauthenticated &&    <Link className="nav-link"  to="/welcome/in28minutes">Home</Link>}
         </li>
           <li  className="nav-item" >
            {isauthenticated &&       <Link className="nav-link"  to="/todos">Todos</Link>}
       </li>           
           </ul>
           </div>
           <ul className="navbar-nav">
           <li  className="nav-item" >
            {!isauthenticated &&   <Link className="nav-link"  to="/">Login</Link>}  
           </li>
           <li  className="nav-item" >
           {isauthenticated &&  <Link className="nav-link"  to="/logout" onClick={logout}>Logout</Link>}
           </li>
   
           </ul> 
           </nav>
                 </div>
                 </div>
        </header>
    )
}
