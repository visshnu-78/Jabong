import React from 'react';
import Modal from 'react-modal';
import './signin.css'
 
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
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement')
 
class signup extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      modalIsOpen: true,
      name: "",
      username: "",
      email: "",
      password: "",
      role: "Admin"
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
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.displayModel("signup")
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.URL)
    fetch(this.URL+'/signup', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            role: this.state.role
        })
    }).then(data=> data.json())
    .then(data=> {
      alert(data.parent.detail)
    })
      this.closeModal();
  }
  handlefName(e) {
    this.setState({name: e.target.value})
  }
  handlelName(e) {
    this.setState({username: e.target.value})
  }
  handleuName(e) {
    this.setState({email: e.target.value})
  }
  handlePassword(e) {
    this.setState({password: e.target.value})
  }
 
  render() {
    return (
      <div>
        
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Signup Modal"
        >
 
          <h2>Sign Up</h2>
          <form className="signin-form" onSubmit={(event)=>{this.handleSubmit(event)}}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" onChange={e=>this.handlefName(e)} required></input>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" onChange={e=>this.handlelName(e)} required></input>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" onChange={e=>this.handleuName(e)} required></input><br></br>
              <label htmlFor="psw">Password</label>
              <input type="password" id="psw" name="psw" onChange={e=>this.handlePassword(e)} required></input>
              <label htmlFor="role">Role</label>
              <input type="text" id="role" name="role" value={this.state.role} disabled></input>
              <button type="submit" id="submit">Sign Up</button>
          </form>
        </Modal>
      </div>
    );
  }
}
export default signup;
