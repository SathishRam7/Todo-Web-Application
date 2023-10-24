import { Authcontext } from "./security/Authcontext"
import { useContext } from "react"
export default function Footercomponent(){
    const authcontext=useContext(Authcontext)
console.log(`Footer component - ${authcontext.number}`);
    return(
        <footer className="footer">
            <div className="container">
                Your footer
            </div>
  
        </footer>
    )
}
