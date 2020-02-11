import React, { Component } from 'react'
import './navbar.css'
import {BrowserRouter as Router, Link} from 'react-router-dom'
export default class navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <span className="logo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-0-1zh5NOayjRlkPav7kbt8vYbkqIiypkpIffB3tdOgOK2bK6" height="50px"></img>
                </span>
                <span>
                    <ul className="ul-nav">
                        <li className="li-nav">WOMEN</li>
                        <li className="li-nav">MEN</li>
                        <li className="li-nav">KIDS</li>
                        <li className="li-nav">ACCESSORIES</li>
                        <li className="li-nav">SPORTS</li>
                        <li className="li-nav">HOME & LIVING</li>
                    </ul>
                </span>
                <span className="images">
                    <Link to ='/favourites'>
                    <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxkxkXzdM940OdK-Z25h-PeqFMbz3eBHkGUCNbkCkj0zzmlljc" width="35px"></img>
                    </Link>
                    <img className="img" src="https://image.flaticon.com/icons/png/512/34/34627.png" width="35px"></img>
                </span>
                <span className="search-bar">
                    <input type="text" placeholder="BE YOU. SEARCH YOUR STYLE" className="input"></input>
                    <button className="search"><img src="https://www.materialui.co/materialIcons/action/search_grey_192x192.png" height="auto" width="15px"></img></button>
                </span>
                
            </div>
        )
    }
}
