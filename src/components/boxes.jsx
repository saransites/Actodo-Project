function Boxes(props){
    return(<>
    <div style={{backgroundColor:props.bgcolor}} className="flex-grow p-4 rounded">
        <h2 className="font-bold text-lg text-black">{props.title}</h2>
        <p>{props.subtitle}</p>
    </div>
    </>)
}
export default Boxes