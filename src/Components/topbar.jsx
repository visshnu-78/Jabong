import React, { Component } from 'react'
import './topbar.css'
import SignInForm from './signin'
import SignUpForm from './signup'
import {withRouter} from 'react-router-dom'

class topbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signin: false,
            signup: false,
            username: '', 
            isSignedIn: false
        }
    }
    URL= process.env.NODE_ENV === "development"?"http:localhost:3001":"/backend/"
    displayModel = (variable) => {
        var temp = this.state[variable];
        this.setState({[variable]:!temp})
    }
    componentDidMount() {
        console.log(this.URL)
        var token = JSON.parse(localStorage.getItem("token"))
        fetch(this.URL+"/check", {
            method: 'post',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({"token":token})
        }).then(data=> data.json())
        .then(data=>{
            if(data.res === "Correct") {
                this.setState({isSignedIn:true})
                this.props.role(data.data.role)
                this.props.id(data.data.id)
            }
            else {
                this.setState({isSignedIn:false})
                localStorage.removeItem("token")
                this.props.history.push('/')
            }
        })
    }
    handleSignIn = () => {
        this.setState({isSignedIn:true})
    }
    logout = () => {
        this.setState({isSignedIn:false})
        localStorage.removeItem("token")
        this.props.history.push('/')
    }
    render() {
        return (
            <div className="top-bar">
                <span className="top">DOWNLOAD APP</span>
                <span className="top">|</span>
                <span className="top">HELP/SUPPORT</span>
                <span className="top">|</span>
                {(!this.state.isSignedIn)?
                <span>
                <span className="top" onClick={()=>this.displayModel("signin")}>SIGN IN</span>
                <span className="top">|</span>
                <span className="top" onClick={()=>this.displayModel("signup")}>SIGN UP</span></span>:
                <span className="top" onClick={()=>this.logout()}>LOGOUT</span>
                }
                {(this.state.signin)?
                    <SignInForm displayModel={this.displayModel}t={this.state.signin} signin={this.handleSignIn} username={this.state.username} role={this.props.role}/>
                    :(this.state.signup)?
                    <SignUpForm displayModel={this.displayModel}/>:
                    null
                }
            </div>
        )
    }
}
export default withRouter(topbar)