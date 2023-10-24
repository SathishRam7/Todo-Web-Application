import { useParams ,useNavigate} from "react-router-dom"
import { createtodoapi, retriveallapi, updatetodoapi } from "./api/Todoapiservice"
import { useAuth } from "./security/Authcontext"
import { useEffect, useState } from "react"
import {retrivetodoapi} from "./api/Todoapiservice"
import {ErrorMessage, Field, Form, Formik} from 'formik'
import moment from 'moment'

export default function Todocomponet(){
  
    const{id}=useParams()
    const navigate=useNavigate();
 const[description,setdescription] =useState('')
 const[targetDate,settargetdate] =useState('')
 const authcontext=useAuth()
 const username=authcontext.username
const done=authcontext.done
useEffect(
()=>retrivetodos(),[id]
)

 function retrivetodos(){
if(id!=-1){
    retrivetodoapi(username,id).then(response=>{
        setdescription(response.data.description)
        settargetdate(response.data.targetDate)
    })
}}
 
 function onsubmit(values){
    console.log(values)
    const todo={
id:id,
username:username,
description:values.description,
targetDate:values.targetDate,
done:'yes'
    }
  
console.log(todo)
if(id==-1){
    createtodoapi(username,todo)
    .then(response=>{
navigate('/todos')
    })
}else{
    updatetodoapi(username,id,todo)
    .then(response=>{
navigate('/todos')
    })
}
 }
 function validate(values){
let errors={
    // description:'Enter a valid description',
    // targetdate:'Enter a valid targetdate'
}
if(values.description.length<5){
errors.description='Enter at least 5 characters'
}
if(values.targetDate==null || values.targetDate=='' || !moment(values.targetDate).isValid()){
    errors.targetDate='Enter a Target date'
    }
    

return errors
 }
 
 
    return(
        <div className="container">

<h1>Enter Todo Details</h1>
<div>
<Formik initialValues={{description,targetDate}}
enableReinitialize={true}
onSubmit={onsubmit}
validate={validate}
>{
(props)=>(
    
   <Form>
    <ErrorMessage
    name="description"
    component="div"
    className="alert alert-warning"
    
    />

<ErrorMessage
    name="targetDate"
    component="div"
    className="alert alert-warning"
    />

    <fieldset className="form-group">
        <label>Description</label>
        <Field type="text" className="form-control" name="description"/>
    </fieldset>
    <fieldset className="form-group">
        <label>Target Date</label>
        <Field type="date" className="form-control" name="targetDate"/>
    </fieldset>
    <div>
        <button type="submit" className="btn btn-success">Save</button>
    </div>
   </Form>
)
}
</Formik>

</div>
        </div>
    )
}
