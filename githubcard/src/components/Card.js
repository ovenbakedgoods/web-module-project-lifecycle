import React from "react"
import {BrowserRouter, Link, Route, NavLink,} from "react-router-dom"
import Followers from "./Followers";

const UserCard = (props) =>{
        return(
         <div className = "Card">
            <h1>Hello, {props.login}</h1>
            <h2>How is the weather in {props.location}?</h2>
            <h3>Here's a little about you </h3>
            <p>{props.bio}</p>
            <nav>
            <ul className = "cardlist">
            <li><NavLink to = "/followers" style={{ textDecoration: 'none' }}>Go To Followers</NavLink></li>
            <li><NavLink to = "/repos" style={{ textDecoration: 'none' }}>Go To Repos</NavLink> </li>
            </ul>
            </nav>
            </div>
        )
    }

export default UserCard;

