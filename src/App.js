import Nav from './Components/Nav.js';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Footer from "./Components/Footer.js";
import SignUp from "./Components/SignUp.js";
import PrivateRoute from "./Components/PrivateComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route element={<PrivateRoute />}>
            <Route path="/" element={ <h1>Home Page</h1> } />
            <Route path="/add" element={ <h1>Add Page</h1> } />
            <Route path="/update" element={ <h1>Update Page</h1> } />
            <Route path="/logout" element={ <h1>Logout Page</h1> } />
            <Route path="/profile" element={ <h1>Profile Page</h1> } />
          </Route>

          <Route path="/signup" element={ <SignUp /> } />
          
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
    
  );
}

export default App;
