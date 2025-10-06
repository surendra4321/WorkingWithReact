function User({user}){
    //console.log(probs);
    return(
       <>
       <h1>Name :{user.name}</h1>   
       <h2>Age : {user.age}</h2> 
       <h2>Email : {user.email}</h2>  
       </>
    );
}
export default User;