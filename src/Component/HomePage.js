import React from 'react'
import backgroundImage from '../images/background.png'


const HomePage = () => {
    return (
        <div className="container-fluid container-home">
            <img src={backgroundImage} className="bg-image" alt="kawo-legal" />
            <div className="col-md-3"></div>
            <div className="col-md-6 content-home">
                {/* <center>
                    <div>
                        <h1>KAWOLEGAL</h1>
                    </div>
                    <div>
                        <p>A collaborative ecosystem for<br />problem solvers and support for Startups.</p>
                    </div>
                    <div>
                        <a className="btn btn-default btn-home" href="register.html" role="button">Register Now!</a>
                    </div>
                </center> */}
            </div>
            <div className="col-md-3"></div>
        </div>

    )
}

export default HomePage