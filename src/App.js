

import Header from './components/Header/header';

import { BrowserRouter,  Route } from "react-router-dom"
import Dashboard from './components/Dashboard/dashboard';
import Register from './components/Register/register';
import Login from './components/Login/login';
import Changepassword from './components/chnagepassword/changepassword';

function App() {
  return (
    <div>

      
      <BrowserRouter>
      <Route path="/" exact component={Header} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/changepassword" component={Changepassword} />

      </BrowserRouter>



    </div>
  )
}

export default App;
