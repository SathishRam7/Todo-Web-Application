const x={
 name:'ram',
address:{
    line:'xyz',
    no:123,
},
profiles:['hii','oii'],
printprofile:()=>{
    x.profiles.map(
        profile=>{
            console.log(profile)
        }
    )
}
}

export default function Learningjs(){
    return(
<>

<div>hi its js</div>
<div>{x.name}</div>
<div>{x.address.no}</div>
<div>{x.profiles[1]}</div>
<div>{x.printprofile()}</div>


</>
    )
}