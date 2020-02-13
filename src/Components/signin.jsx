import React from 'react';
import Modal from 'react-modal';
import {BrowserRouter as  Router,Route,Link,withRouter} from "react-router-dom";
import './signin.css';

 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
class signin extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      modalIsOpen: this.props.t,
      email: "",
      password: "",
      username: ""
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  URL= process.env.NODE_ENV === "development"?"http:localhost:3001":"/backend"
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.displayModel("signin")
  }
  handleuChange(e) {
      this.setState({email: e.target.value})
  }
  handlePassword(e) {
    this.setState({password: e.target.value})
  }
  authenticate = (event) => {
    event.preventDefault();
    fetch(this.URL+'/signin', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: this.state.email,
            password: this.state.password
        })
    }).then(data => data.json())
      .then(data =>{
        if(data!== "wrong credentials") {
          localStorage.setItem("token",JSON.stringify(data.token))
          this.props.signin()
          this.props.role(data.role)
          if(data.role === "Admin"){
          this.props.history.push('/admin')
          }
        }
        else {
          alert("Wrong credentials")
        }
    })
    this.closeModal();
  }
  render() {
    return (
      <div>
        
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Signin Modal"
        >
 
          <h2>Sign In</h2>
          <div className="signin-form">
              <label htmlFor="email">Email</label>
              <input type="text" id="username" name="email" onChange={(e)=>this.handleuChange(e)}></input><br></br>
              <label htmlFor="psw">Password</label>
              <input type="password" id="psw" name="psw" onChange={(e)=>this.handlePassword(e)}></input>
              <button id="submit" onClick={(event)=>this.authenticate(event)}>Login</button>
          </div>
        </Modal>
      </div>
    );
  }
}
export default withRouter(signin);