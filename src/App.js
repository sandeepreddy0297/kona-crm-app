import logo from './logo.svg';
import './App.css';
import Login from './components/Login/login';
import Register from './components/Register/register';
import { BrowserRouter, NavLink, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard/dashboard";

function App() {
  return (
    <div>

      <BrowserRouter>

        {/* <NavLink to="/login" >Login</NavLink> &nbsp; &nbsp; &nbsp;
      <NavLink to="/register" >register</NavLink> &nbsp; &nbsp; &nbsp; &nbsp; */}

     <Route path="/" exact component={Dashboard} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />

      </BrowserRouter>


    </div>
  )
}

export default App;
