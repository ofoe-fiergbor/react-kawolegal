import React from 'react'
import { Link } from 'react-router-dom'
import backgroundImage from '../images/background.png'


const HomePage = () => {
    return (
        <div className="container-fluid container-home">
            <img src={backgroundImage} className="bg-image" alt="kawo-legal" />
            <div className=" content-home">
                <center>
                    <div>
                        <h1>KAWOLEGAL</h1>
                    </div>
                    <div>
                        <h3>A collaborative ecosystem for<br />problem solvers and support for Startups.</h3>
                    </div>
                    <div>
                        <Link to='/register'>
                        <a className="btn btn-default btn-home" href="register.html" role="button">Register Now!</a>
                        </Link>
                    </div>
                </center>
            </div>
            
        </div>

    )
}

export default HomePage