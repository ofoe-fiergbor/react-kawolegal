import React from "react";
import NavBar from "./NavBar";
import StartUps from "./StartUps";
import Register from "./Register";
import Footer from "./Footer";
import LogIn from "./LogIn";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const MainPage = () => {
  return (
    <Router>
      <div>
      <NavBar />
      <Switch>
          <Route path = '/' exact component={HomePage}/>
          <Route path ='/startups' component ={StartUps}/>
          <Route path ='/register' component={Register}/>
          <Route path= '/login' component={LogIn}/>   
        </Switch> 
        <footer>      
            <Footer />
        </footer>
      </div>
    </Router>
  );
};

export default MainPage;
