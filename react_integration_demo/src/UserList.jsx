import { useEffect, useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router';
 
function UserList() {
  const [usersData, setUserData]= useState([]);
  useEffect(()=> {
    getUsersData();
  },[] )
  const navigate = useNavigate();
  const url = "http://localhost:3000/users";
   const getUsersData= async()=>{
        let response = await fetch(url);
      response = await response.json();
      console.log(response);
      setUserData(response);
   }
   const deleteUser= async(id)=>{
          console.log(id);
          let response = await fetch(url+"/"+id,{
            method:'delete'
          })
          response = await response.json();
          if(response){
            alert("record deleted")
            getUsersData()

          }
        }
          const editUser=(id)=>{
             navigate("/edit/"+id);
          }
  return (
    <>  
      <h1>User List UI</h1>
      <ul className="user-list user-list-head">
        <li>Name</li>
        <li>Age</li>
        <li>Email</li>
        <li>Action</li>
      </ul>
      {
      usersData && usersData.map((user)=>(
            <ul className="user-list user-list-head">
            <li>{user.name}</li>
             <li>{user.age}</li>
              <li>{user.email}</li>
              <li><button onClick={()=>deleteUser(user.id)}>Delete</button></li>
               <li><button onClick={()=>editUser(user.id)}>Edit</button></li>
            </ul>
        ))
      }
    </>
  )
}

export default UserList
