import { useState } from 'react'
import './App.css'

function App() {

  const [name, setName]= useState('');
  const[nameErr, setNameErr]=useState();
  const [password, setPassword]= useState('');
  const[passErr, setPassErr]=useState();
  
const handleName=(event)=>{
  console.log(event.target.value);
  if(event.target.value.length>5){
    setNameErr("Please enter vaid username, only 5 character allowed ");

  }else{
    setNameErr('')
  }
}
const handlePassword=(event)=>{
   let regex = /^[A-Z0-9]+$/i;
  if(regex.test(event.target.value)){
    setPassErr()
  }else{  
    setPassErr("Please enter vaid password. only numbers and aalphabets allowed");
  }
}
  return (
    <>
      <div>
         <span className='red-color'>{ nameErr && nameErr}</span>
         <br /><br />
        <input className={nameErr?'error':''} type='text' onChange={handleName} placeholder='enter name' />
        <br /><br />
         <span className='red-color'>{ passErr && passErr}</span>
         <br /><br />
        <input className={passErr?'error':''} type='text' placeholder='enter password' onChange={handlePassword}/>
        <br /><br />
        <button disabled={passErr || nameErr}>Login</button>
      </div>
      
    </>
  )
}

export default App
