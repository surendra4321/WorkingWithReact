import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ExapComp, Header} from './Header'
import Login from './UserComponent'
import Sates from './States'
import Count from './Count'

function App() { 
alert(sum())
  return ( 
    <div> 
       <Header/>
       <h1>Hello!! This is my first react application</h1>
       <h2>Welcome to react</h2>  
       <Fruits />
       <Colour />
       <Login />
       <TodoList/>
       <ExapComp/> 
       <Sates />
       <Count/>
       </div>     
  )
}
function Fruits(){
  return(
    <h1>Apple</h1>
  )
}
function Colour(){
  return(
    <h1>Red Color</h1>
  )
}

function sum(){
  return 10+20
}
  function TodoList() {
  return (
      // This doesn't quite work!
      <>
    <h1>Hedy Lamarr's Todos</h1>
    <img 
      src="https://i.imgur.com/yXOvdOSs.jpg" 
      alt="Hedy Lamarr" 
      class="photo"
    />
    <ul>
      <li>Invent new traffic lights</li>
      <li>Rehearse a movie scene</li>
      <li>Improve the spectrum technology</li>
    </ul>
    </>
  );
}


export default App

