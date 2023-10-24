import { useState } from 'react'
import'./Counter.css'
import Counterbutton from './Counterbutton'


export default function Counter(){
    const [count,setcount]=useState(0)

    function incrementparent(by){
setcount(count+by)

}
function decrementparent(by){
    setcount(count-by)
    
    }

    function reset(){
        setcount(0)
    }

    return(
        <>
        <span className="totalcount" >{count}</span>
        <Counterbutton by={1} incrementmethod={incrementparent} decrementmethod={decrementparent}/>
<Counterbutton by={2} incrementmethod={incrementparent} decrementmethod={decrementparent}/>
<Counterbutton by={5}incrementmethod={incrementparent} decrementmethod={decrementparent}/>

<button className="resetbutton" onClick={reset} >Reset</button>
</>
    )
}

 