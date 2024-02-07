import Inputbox from "./Inputbox"
import Listbox from "./listbox"
import { useState } from "react"
function Listcontainer(){
    const [list,setlist]=useState([
        // {
        //     id:1,
        //     activity:"This is first"
        // },
        // {
        //     id:2,
        //     activity:"This is second"
        // },
    ])
    return(<>
        <Inputbox list={list} setlist={setlist}/>
        <Listbox list={list} setlist={setlist}/>
    </>)
}
export default Listcontainer