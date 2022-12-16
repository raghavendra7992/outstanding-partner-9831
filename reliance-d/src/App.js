// import "./App.css";
// import AllRoutes from "./Components/AllRoutes/AllRoutes";
// import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/Navbar/Footer";


// function App() {
//   return (
//     <div>
//       <Navbar />

//       <AllRoutes />
//       <Footer />
//     </div>
//   );
// }

// export default App;



import './App.css';
import AllRoutes from './Components/AllRoutes/AllRoutes';
import Footer from './Components/Pages/Footer';
import Navbar from './Components/Pages/Navbar';


function App() {
  return (
    <div className="App">
      <div style={{position:"sticky",top:"0",zIndex:1}}><Navbar/></div>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;

