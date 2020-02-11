import React, {Component} from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
 export default class loader extends React.Component {
  //other logic
    render() {
     return(
      <Loader
         type="Hearts"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs

      />
     );
    }
 }