import React from 'react'


class LogIn extends React.Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''

        }
    }

    handleEmail =e=>{
        this.setState({
        email:e.target.value})
    }
    handlePassword =e=>{
        this.setState({
            password:e.target.value})
        
    }
    handleLogInSubmit =e=>{
        alert(`${this.state.email} ${this.state.password}`)
    }
render(){
    const{email, password} = this.state
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 login-form-a">
                    <h3>Already a member? Login to add your Startup.</h3>
                    <div>
                        <form className="login-form" onSubmit={this.handleLogInSubmit}>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" name='email' value={email} onChange={this.handleEmail}/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={password} onChange={this.handlePassword}/>
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
}
export default LogIn