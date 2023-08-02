
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Register from "./pages/Register"
import Login from "./pages/Login"
import {Routes,Route, Navigate} from "react-router-dom";
import Summary from './pages/Summary';
import Chatbox from './pages/Chatbox'
import Jsconverter from './pages/Jsconverter'
import Paragraph from './pages/Paragraph'
import Seifiimage from './pages/Seifiimage'
function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<ProtectRouter><Homepage/></ProtectRouter>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/summary" element={<Summary/>}/>
      <Route path="/chatbox" element={<Chatbox/>}/>
      <Route path="/jsconverter" element={<Jsconverter/>}/>
      <Route path="/paragraph" element={<Paragraph/>}/>
      <Route path="/seifiimage" element={<Seifiimage/>}/>
    
    </Routes>
    
    
    </div>
  );
}

export function ProtectRouter(props){
      if(localStorage.getItem("user")){
        return props.children
      }
      else{
        return <Navigate to="/login"/>
      }
}

export default App;
