import React from 'react';
import {BrowserRouter as Route, Redirect , withRouter} from 'react-router-dom';

// import Navigation from '../components/Navigation';

const PrivateRoute = ({ path, component: Component,  ...rest }) => {
  let user = localStorage.getItem("token");
  return(user)? (
      <Route path={path} {...rest} render={(props) => <Component {...props}/>}/>
  ): (
        <div>
            {console.log("124355")}
            <Redirect to ="/"/>
        </div>

  );
}


export default withRouter(PrivateRoute);