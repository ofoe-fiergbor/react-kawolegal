import React from 'react'
import NavBar from './NavBar'
import StartUps from './StartUps'
import Register from './Register'
import Footer from './Footer'
import LogIn from './LogIn'
import HomePage from './HomePage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



const MainPage = () =>{
    return(
        <div>
            <NavBar/>
            <HomePage/>
            <StartUps/>
            <Register/>
            <LogIn/>
            <Footer/>
        </div>
    )
}


export default MainPage