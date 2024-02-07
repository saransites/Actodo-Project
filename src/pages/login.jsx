import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props){
    const user=props.user
    const navigate=useNavigate()
    const [nameinput,setnameinput]=useState()
    const [passinput,setpassinput]=useState()
    const [reguser,setreguser]=useState(true)
    
    function handlename(e){
        setnameinput(e.target.value)
    }
    function handlepass(e){
        setpassinput(e.target.value)
    }
    function handlelogin(){
        var userfound=false
        user.map(item=>{
        if(nameinput==item.username && passinput == item.password){
            userfound=true
            navigate("/landingpage",{state:{user:nameinput}})
        }
       })
       if(userfound===false){
        console.log("failed");
        setreguser(false)
       }
    }
    return(<>
    <div className="bg-black p-16">
        <div className="bg-white p-10 rounded">
            <h1 className="text-3xl font-bold">Hey Hii!🙌</h1>
            {
                reguser?<p>I help you to manage your activities in after Login page</p>:<p className="text-red-700">Please signup and back to login</p>
            }
            
            <div className="my-2">
                <input className="border border-black outline-none p-1 rounded" onChange={handlename} type="text" placeholder="Username"></input>
            </div>
            <div className="my-2">
                <input className="border border-black outline-none p-1 rounded" onChange={handlepass} type="password" placeholder="Password"></input>
            </div>
            <button className="p-2 px-4 bg-cyan-800 text-white rounded" onClick={handlelogin}>Login</button>
            <p className="text-amber-800 font-large">Don't have an account?</p>
            <Link className="underline" to={'/signup'}>Signup</Link>
        </div>
    </div>
    </>)
}
export default Login