import { useState } from "react";

function ControlledComp(){
    const [name,setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    return(
     <>
     <h1>Controllerd Component</h1>
     <form action="" method = "get">
     <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter name"></input>
     <br></br><br></br>
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter password"></input>
       <br></br><br></br>
       <input type="email"  value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter email"></input>
        <br></br><br></br>
      <button>Submit</button>
      <button onClick={()=>{setEmail(''); setName(''); setPassword('')}}>Clear</button>

      <h3>{name}</h3>
      <h3>{password}</h3>
      <h3>{email}   
      </h3>
     </form>

     </>

    );
}
export default ControlledComp;
