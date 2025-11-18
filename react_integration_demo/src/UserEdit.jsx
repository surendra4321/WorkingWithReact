import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function UserEdit(){
    const {id}=useParams();
    const [name, setName] = useState('')    
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('') 
    useEffect(()=>{
           getUserData();
    }, [])
     const url = "http://localhost:3000/users/"+id;
     const navigate = useNavigate
    const getUserData=async()=>{   
        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        setName(response.name);
          setAge(response.age);
          setEmail(response.email);
    }
    const udateUserData=async()=>{
      console.log(name, age, email);
      let response = await fetch(url,{
        method:'Put',
        body:JSON.stringify({name,age,email})
      });
      response = await response.json();
      console.log(response);
      if(response){
      alert("User data updated successfully");
      navigate('/')
      }
    }
    return(
  <div style={{textAlign:'center'}}>
    <h2>EDIT USER DETAILS</h2>
    <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="user name"/> 
     <br/><br/>
      <input type="text" value={age} onChange={(event)=>setAge(event.target.value)} placeholder="user age"/> 
       <br/><br/>
        <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="user email"/> 
        <br/><br/>
        <button onClick={udateUserData}>Update User</button>

  </div>
    )
}
export default UserEdit;