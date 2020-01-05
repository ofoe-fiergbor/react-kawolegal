import React, { Component } from 'react'

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullName : '',
            email: '',
            password:'',
            confirmPassword:''

        }
    }
    handleFullName =e =>{
        this.setState({
            fullName : e.target.value
        })
    }
    handleEmail = e=>{
        this.setState({
            email:e.target.value
        })
    }
    handlePassword =e=>{
        this.setState({
            password:e.target.value
        })
    }
    handleConfirmPassword =e =>{
        this.setState({
            confirmPassword: e.target.value
        })
    }
    handleSubmit =e=>{
        if (this.state.password === this.state.confirmPassword){
            console.log(`${this.state.fullName} ${this.state.email} ${this.state.password}`)
        }else{
            alert('passwords do not mactch! Try again')
        }
        e.preventDefault()
    }
    render() {
        return (
            <div>
                <div className="container register">

                    <div className="col-md-2"></div>
                    <div className="col-md-8 signup-form">
                        <h3>Join KawoLegal. Sign Up to get listed now!</h3>
                        <div>
                            <form onSubmit = {this.handleSubmit}>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Full Name</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Full Name" name='fullName' value={this.state.fullName} onChange={this.handleFullName}/>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address </label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" name='email' value={this.state.email} onChange={this.handleEmail}/>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={this.state.password} onChange={this.handlePassword}/>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Confirm Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" name='password' value={this.state.confirmPassword} onChange={this.handleConfirmPassword}/>
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
}

export default Register


