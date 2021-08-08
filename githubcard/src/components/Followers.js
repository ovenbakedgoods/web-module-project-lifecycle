import React from "react"
import { BrowserRouter, Link, Route } from "react-router-dom"
import { useEffect, useState } from "react"; 
import axios from "axios";


const Followers = () => {
    const [followers, setFollowers] = useState([])
    useEffect(() => 
    axios.get("https://api.github.com/users/ovenbakedgoods/followers")
    .then(res => setFollowers(res.data))
  .catch(err => console.log(err))
    )
    
        return(
            <div className = "Followers">
            <Link to="/"  style={{ textDecoration: 'none' }}>Home</Link>
            <h1>This is the followers page</h1>
            <h2>Below is a list of your followers</h2>
            <ul>
            {followers.map(follower => {
          return <li className="followerlist" key={follower.id}>{follower.login} </li>
            })}
            </ul>
      </div>
    );
  }

export default Followers

/** {this.followers.map(follower => {
          return <p className="follower" key={follower}>{follower} </p>
            })} */