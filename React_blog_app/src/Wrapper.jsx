//import { Children } from "react";
//Passing the JSX and the whole HTML in the app.jsx
function Wrapper({children}){
return(
    <div style={{color:"green", border:"5px solid green", width:"300px"}}>{children}</div>
)
}
export default Wrapper;
