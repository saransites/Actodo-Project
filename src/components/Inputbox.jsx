import { useState } from "react"

function Inputbox(props){
    const list=props.list
    const setlist=props.setlist
    const [newlist,setnewlist]=useState("")
    function handlechange(e){
        setnewlist(e.target.value)
    }
    function handleadd(){
        setlist([...list,{id:list.length+1,activity:newlist}])
        setnewlist("")
    }
    return(<>
    <div className="flex flex-col gap-2">
        <h1 className="font-bold text-lg text-black">Manage Activities</h1>
        <input value={newlist} onChange={handlechange} className="border outline-none border-black p-1" placeholder="Enter your Activity"></input>              
        <button className="p-1 bg-slate-700 text-white" onClick={handleadd}>Add</button>
    </div>
    </>)
}
export default Inputbox