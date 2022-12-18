import AllRoutes from "../AllRoutes/AllRoutes"
import Navbar from "../Navbar/Navbar"
import SideBar from "../SideBar/SideBar"

function MainRoute(){
    return(
        <div>
<Navbar />
      <div style={{ display: "flex" }}>
        <SideBar />

        <AllRoutes />
      </div>
        </div>
    )
}
export default MainRoute