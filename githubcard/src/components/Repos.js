import React, { useState } from "react"
import { BrowserRouter, Link, Route } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"


const Repos = () => {

    const [repos, setRepos] = useState([])
    useEffect(() => 
    axios.get("https://api.github.com/users/ovenbakedgoods/repos")
    .then(res => setRepos(res.data))
  .catch(err => console.log(err))
    )
        return(
            <div className = "Repos">
            <Link to="/"  style={{ textDecoration: 'none' }}>Home</Link>
            <h1>This is the repos page</h1>
            <h2>Below is a list of your repos</h2>
            <ul>
            {repos.map(repo => {
          return <li className="followerlist" key={repo.name}>{repo.name} </li>
            })}
            </ul>
            </div>

        )
    }

/*{repos}
 {this.props.name.map(follower => {
          return <p className="follower" key={follower}>{follower} </p>
            })}
*/


export default Repos