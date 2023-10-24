import{PropTypes} from 'prop-types'

export default function Counterbutton({by,incrementmethod,decrementmethod}){

        return(
            <div className="Counter">
    
       <div>
       <button className="counterbutton" onClick={()=>incrementmethod(by)} >+{by}</button>
       <button className="counterbutton" onClick={()=>decrementmethod(by)} >-{by}</button>
       </div>
       
      
    </div>
        )
    }
    Counterbutton.prototype={
        by:PropTypes.number
    }