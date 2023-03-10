import Nav from './Components/Nav.js';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Footer from "./Components/Footer.js";
import SignUp from "./Components/SignUp.js";
import PrivateRoute from "./Components/PrivateComponent";
import Login from "./Components/Login";
import AddPro from "./Components/AddProduct";
import ListPro from "./Components/ListPro";
import UpdatePro from "./Components/UpdatePro";
import Profilepg from './Components/Profilepg.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route element={<PrivateRoute />}>
            <Route path="/" element={ <ListPro /> } />
            <Route path="/add" element={ <AddPro /> } />
            <Route path="/update/:id" element={ <UpdatePro /> } />
            <Route path="/logout" element={ <h1>Logout Page</h1> } />
            <Route path="/profile" element={ <Profilepg /> } />
          </Route>

          <Route path="/signup" element={ <SignUp /> } />
          <Route path="/login" element={ <Login /> } />
          
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
    
  );
}

export default App;
