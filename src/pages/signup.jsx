import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Signup(props){
    const user=props.user
    const setuser=props.setuser
    const navigate=useNavigate()

    const [nameinput,setnameinput]=useState()
    const [passinput,setpassinput]=useState()
    function handlename(e){
        setnameinput(e.target.value)
    }
    function handlepass(e){
        setpassinput(e.target.value)
    }
    function handleuser(){
        setuser([...user,{username:nameinput,password:passinput}])
        navigate('/')
    }
    return(<>
    <div className="bg-black p-16">
        <div className="bg-white p-10 rounded">
            <h1 className="text-3xl font-bold">Hey Hii!🙌</h1>
            <div className="my-2">
                <input className="border border-black outline-none p-1 rounded" onChange={handlename} type="text" placeholder="Username"></input>
            </div>
            <div className="my-2">
                <input className="border border-black outline-none p-1 rounded" onChange={handlepass} type="password" placeholder="Password"></input>
            </div>
            <div className="my-2">
                <input className="border border-black outline-none p-1 rounded" type="number" placeholder="Confirm Password"></input>
            </div>
            <button className="p-2 px-4 bg-cyan-800 text-white rounded" onClick={handleuser}>Signup</button>
            <p className="text-amber-800 font-large">You are creating a account click below login button</p>
            <Link to={'/'} className="underline">Login</Link>
        </div>
    </div>
    </>)
}
export default Signup