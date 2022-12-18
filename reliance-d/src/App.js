import MainRoute from './AdminDashBoard/MainRoute/MainRoute';
import './App.css';
import AllRoutes from './Components/AllRoutes/AllRoutes';
import Footer from './Components/Pages/Footer';
import Navbar from './Components/Pages/Navbar';


function App() {
  return (
    <div className="App">
      <div style={{position:"sticky",top:"0",zIndex:1}}><Navbar/></div>
      {/* <AllRoutes/>
      <Footer/> */}
    <MainRoute/>
    </div>
  );
}

export default App;

