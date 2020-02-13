import React, { Component } from 'react'
import Card from './card'
import { withRouter } from 'react-router-dom';

class favourites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fav: [],
            id: this.props.id
        }
    }
    URL= process.env.NODE_ENV === "development"?"http:localhost:3001":"/backend/"
    componentDidMount= async()=> {
        let fav = []
        console.log("id ",this.props.id)
        await fetch(this.URL+`/getfav/${this.state.id}`, {
            method: 'get',
        }).then(data => data.json())
        .then(data => {
            console.log(data)
            data.map((products, index)=>{
                fav.push(
               <Card 
               data = {data}
               index = {index}
               image={products.image}
               name = {products.name}
               price={products.price}
               />
               )
          })   
        })
        this.setState({fav: fav})
    }
    getFav =  () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                {/* <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/back-button-6-921315.png" onClick={()=>this.getFav()} width="50px"></img> */}
                {this.state.fav}
            </div>
        )
    }
}
export default withRouter(favourites)