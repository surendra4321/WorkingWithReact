import { useState } from "react";
function Sates() {
  
const[fruit, setFruit] =  useState("Apple");
  const handleFruit = () => {
     setFruit("Kivi")
      
    console.log(fruit);
  }
  return (
    <div>
      <h1>States</h1>
      <h2>{fruit}</h2>
      <button onClick={handleFruit}>Change Fruit Name</button>
    </div>
  )
}
export default Sates;
