 
 export function Header() { //Component name is start with Uppercase letter
  return ( 
     <>
       <h2>Header file</h2>    
       <h1>Header2</h1>
       </> //Fragment
  );
}

export function ExapComp(){
     const userName = "Aman Kumar";
     let x= 20;
     let y=30;
     //calling JS function using the JSX 
     function fruit(){
          return"Apple";
     }
   //Calling the object using the JSX
     const userOb={
          name:"Aman",
          email:"aman@gmail.com",
     }

     //calling the array using the JSX
    const userArray =['sam', 'peter', 'nischal', 'neha']

     return(
          <>
          <h1>{userName}</h1>
          <h1>{10+20}</h1>
         <h2>{fruit()}</h2> 
         <h1>{userOb.name}</h1>
         <h1>{userOb.email}</h1>
         <h1>{userArray[0]}</h1>
         <h1>{userArray[1]}</h1>
         <h1>{userArray[2]}</h1>
         <h1>{userArray[3]}</h1>
          </>


     );
}
//export default Header
 

