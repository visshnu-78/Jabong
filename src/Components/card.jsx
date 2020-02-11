import React, { Component } from 'react'
import './card.css'
import SignIn from './signin'

export default class card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signin: false,
            sign: this.props.signin,
            favourites: []
        }
    }
    componentDidMount() {
        console.log(this.props.data)
    }
    handleFav = () => {
        let fav = [...this.state.favourites]
        if(!this.state.sign) {
            alert("You are not signedin")
        }
        else {
            console.log(this.props.data[this.props.index])
            fav.push(this.props.data[this.props.index])
            this.setState({favourites:fav})
            fetch("http://localhost:3001/fav",{
                method:'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                   'fav': this.props.data[this.props.index],
                   'id': this.props.id
                })
            })
        }
    }
    render() {
        return (
            <div className="top1">
                <div className="card">
                <img src={this.props.image}className="image"></img>
                <span><img src="https://cdn3.iconfinder.com/data/icons/simple-line-3/32/Favourite_favourites_heart_like_liked-512.png" className="fav" onClick={()=>this.handleFav()} height="30px" width="30px"></img></span>
                <p>{this.props.name}</p>
                <p>{this.props.price}</p>
                </div>
            </div>
        )
    }
}
