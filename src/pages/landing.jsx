import Header from "../components/header"
import Boxes from "../components/boxes"
import Listcontainer from "../components/listcontainer"
import { useLocation } from "react-router-dom"
function Landing(){
    const data=useLocation()
    return(<>
      <div className="bg-black p-16">
          <div className="bg-white p-10 rounded">
              <Header name={data.state.user}/>
              <section className="gap-2 my-2 text-center text-white flex justify-between flex-wrap">
                <Boxes bgcolor={"#365785"} title={"20"} subtitle={"Chennai"}/>
                <Boxes bgcolor={"#562785"} title={"April"} subtitle={"14:07:28"}/>
                <Boxes bgcolor={"#355725"} title={"Built Using"} subtitle={"React"}/>
              </section>
              <section className="flex gap-2 flex-wrap">
                <Listcontainer/>
              </section>
          </div>
      </div>
    </>)
}
export default Landing