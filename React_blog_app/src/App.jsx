import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ExapComp, Header} from './Header'
import Login from './UserComponent'
import Sates from './States'
import Count from './Count'
import { Condition } from './Condition'
import User from './User'
import Wrapper from './Wrapper'
import ControlledComp from './ControlledCom'

function App() { 
//alert(sum())
// let userObj ={
//  name:'Amit kumar',
//  age :"28",
//  email:'anil@gmail.com'
// }
// let userObj1 ={
//  name:'Peter',
//  age :"20",
//  email:'peter@gmail.com'
// }
// let userObj2 ={
//  name:'Nischal',
//  age :"20",
//  email:'nischal@gmail.com'
// }
//   return ( 
//     <div> 
//        {/* <Header/> */}
//        <h1>Probs in React JS</h1>
//        {/* <Fruits />
//        <Colour />
//        <Login />
//        <TodoList/>
//        <ExapComp/> 
//        <Sates />
//        <Count/>
//        <Condition/>  */}
//        <User user={userObj}/>
//        <User user={userObj1}/>
//        <User user={userObj2}/>
//        </div>     
//   )
// }
// function Fruits(){
//   return(
//     <h1>Apple</h1>
//   )
// }
// function Colour(){
//   return(
//     <h1>Red Color</h1>
//   )
// }

// function sum(){
//   return 10+20
// }
//   function TodoList() {
//   return (
//       // This doesn't quite work!
//       <>
//     <h1>Hedy Lamarr's Todos</h1>
//     <img 
//       src="https://i.imgur.com/yXOvdOSs.jpg" 
//       alt="Hedy Lamarr" 
//       class="photo"
//     />
//     <ul>
//       <li>Invent new traffic lights</li>
//       <li>Rehearse a movie scene</li>
//       <li>Improve the spectrum technology</li>
//     </ul>
//     </>
//   );
// }

//Default Propers
// return (
// <div>
//   <h1>Default Props In React</h1>
//     <User/>
  
// </div>

// )


// }

// return(
// <div>
// <h1>Probs in the react JS</h1>
// <Wrapper><h1>Hello Everyone </h1></Wrapper>

// <Wrapper><h1>Hello Admin </h1></Wrapper>
// <Wrapper><h1>Hello Trainer </h1></Wrapper>
// </div>
// )

//Event handeling 
// function handleClick(){
//   alert("I am clicked");
// }

// function handelMouseOver(){
//   alert("this is para")
// }

// function handelInputChange(e){
//   //console.log("Input changed")
//   console.log("value till now ", e.target.value);
// }
// return(
//      <div>
      
//       <form>
//         <input type='text' onChange={handelInputChange} />
//       </form>
      
//       <p onMouseOver={handelMouseOver} style={{border:"1px solid black"}}>
//         I am a Paragraph
//       </p>
//        <button onClick={handleClick}>Click On</button>
//      </div>
// )

return (
  <div>
    <ControlledComp/>
  </div>

);
}
export default App  ;     

