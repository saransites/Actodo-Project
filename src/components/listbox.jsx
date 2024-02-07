function Listbox(props){
    const list=props.list
    const setlist=props.setlist
    
    function Handleremove(removeid){
        var temparr=list.filter(item=>{
            if(item.id==removeid){
                return false
                
            }else{
                return true
            }
        })
        setlist(temparr)
    }
    return(<>
        <div className="bg-purple-400 p-2 rounded md:flex-grow">
            <h1 className="font-bold text-lg text-black">Today's Activity</h1>
            
            {
                list.length===0?<p>You haven't added anything yet...</p>:""
            }
            {
                list.map((item,index)=>{
                    return <p>{index+1}::{item.activity} <button className="p-1 my-1 rounded bg-slate-700 text-white" onClick={()=>{Handleremove(item.id)}}>Remove</button> </p>
                })
            }
        </div>
    </>)
}
export default Listbox