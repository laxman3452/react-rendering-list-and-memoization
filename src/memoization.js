import {React,useState,memo} from 'react'

export default function Memoization() {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
  return (
    <>
   <form action = "">
    <fieldset>
    <input type="text" name="firstName" id="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
    <input type="text" name="lastName" id="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
    </fieldset>
   </form>
   <Greeting name = {firstName}  />
   </>
  )
}

const Greeting = memo(({name})=>{
console.log("Greetings rendered", new Date().toString());
return <h1>Hello, {name}!</h1>;
});
