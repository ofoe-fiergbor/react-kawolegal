import React from 'react'

const Register = () => {
    return (
        <div className="container register">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <h3>Join KawoLegal. Sign Up to get listed now!</h3>
                    <div>
                        <form className="signup-form">
                            <div className="form-group">
                                <label for="exampleInputEmail1">Full Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Full Name" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Confirm Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
                            </div>
                            <button type="submit" className="btn btn-default submit-btn">Sign Up</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>

    )
}
export default Register