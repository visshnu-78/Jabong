import React, { Component } from 'react'
import Card from './card'
import NavBar from './navbar'

class products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clothing: [],
            watches: [],
            isSignedIn: false,
            products: [], 
            id: ''
        }
    }
    URL= process.env.NODE_ENV === "development"?"http://localhost:3001":"/backend"
    componentDidMount = () => {
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
                this.setState({id: data.data.id})
            }
            else {
                this.setState({isSignedIn:false})
            }
        })
        this.getClothing();
        this.getWatches();
        
    }

    getClothing =  async() => {
        var clothingData = []
        await fetch(this.URL+"/getClothing", {
            method: 'get'
        })
        .then(data=> data.json())
        .then(data=>{
             data.map( (products, index)=>{
                  clothingData.push(
                 <Card 
                 data = {data}
                 id={this.state.id}
                 index = {index}
                 image={products.image}
                 name = {products.name}
                 price={products.price}
                 signin={this.state.isSignedIn}
                 />
                 )
            })   
        }
        )
        this.setState({clothing: clothingData})
    }
    getWatches = async() => {
        var watchData = []
        await fetch(this.URL+"/getWatches", {
            method: 'get'
        })
        .then(data=> data.json())
        .then(data=>{
             data.map( (products, index)=>{
                  watchData.push(
                 <Card 
                 data = {data}
                 id={this.state.id}
                 index = {index}
                 image={products.image}
                 name = {products.name}
                 price={products.price}
                 signin={this.state.isSignedIn}
                 />
                 )
            })   
        }
        )
        this.setState({watches: watchData})
    }
    render() {
        return (
            <div>
                <NavBar/>
                {this.state.clothing}
                {this.state.watches}
            </div>
        )
    }
}
export default products
