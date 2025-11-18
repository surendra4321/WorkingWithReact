import { useState } from "react";

 function CheckboxHandeling(){
    const [skills,setSkills]= useState([]);
    const handleSkills=(event)=>{
        console.log(event.target.value, event.target.checked);
        if(event.target.checked){
            setSkills([skills, event.target.value]);

        }else{
         setSkills(skills.filter((item) => item !== event.target.value));
        }
    }
    return(
     <>
     <h1>Select your skills</h1>
     <input onChange={handleSkills} type="checkbox" id="php" value="php"/>
     <label htmlFor="php">PHP</label>
     <br></br>
     <input onChange={handleSkills} type="checkbox" id="js" value="JS"/>
     <label htmlFor="js">JS</label>
     <br></br>
     <input onChange={handleSkills} type="checkbox" id="java" value="java"/>
     <label htmlFor="java">Java</label>
     <br></br>
     <input onChange={handleSkills} type="checkbox" id="node" value="node"/>
     <label htmlFor="node">Node</label>
    <h1>{skills.toString()}</h1>


      

     </>

    )
 }
 export default CheckboxHandeling;
