import React, { Component } from 'react';
import './App.css';
import HomePage from './Components/homepage'
import  {BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import TopBar from './Components/topbar'
import PrivateRouter from './Routes/PrivateRouter'
import Admin from './Components/admin'
import Products from './Components/products';
import Favourites from './Components/favourites';
import Loader from './Components/loader'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      role: '',
      id: ''
    }
  }
  setRole = (variable) => {
    this.setState({role: variable})
  }
  setId = (variable) => {
    this.setState({id: variable})
  }
  
  render() {
  return (
    <div>
      <Router>
        <TopBar role={this.setRole} id={this.setId}/>
        <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path = '/products'>
          <Products />
        </Route>
        <PrivateRouter exact path='/favourites'>
          {this.state.id? 
          <Favourites id={this.state.id}/>
          : <Loader/>
          }
        </PrivateRouter>
        {(this.state.role === "Admin")?
        <PrivateRouter exact path='/admin'>
          <Admin />
        </PrivateRouter>
        :<HomePage />
  }
</Switch>
     </Router>
    </div>
  );
  }
}

export default App;
