import React from 'react'


const LogIn = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <h3>Already a member? Login to add your Startup.</h3>
                    <div>
                        <form className="login-form">
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-default submit-btn">Sign in</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>

    )
}
export default LogIn