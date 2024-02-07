function Header(props){
    return(<>
        <header>
            <h1 className="font-bold text-[2.5vw]">Hello {props.name}</h1>
            <p className="text-[1.5vw]">I help you manage your activities</p>
        </header>
    </>)
}
export default Header