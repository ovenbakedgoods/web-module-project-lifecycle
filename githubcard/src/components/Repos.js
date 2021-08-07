import React, { useState } from "react"
import { BrowserRouter, Link, Route } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"


const Repos = () => {

    const [repos, setRepos] = useState([])
    console.log(repos, "repos props")
    useEffect(() => 
    axios.get("https://api.github.com/users/ovenbakedgoods/repos")
    .then(res => setRepos(res.data))
  .catch(err => console.log(err))
    )
        return(
            <div className = "Repos">
            <Link to="/"  style={{ textDecoration: 'none' }}>Home</Link>
            <h1>This is the repos page</h1>
            {repos.map(repo => {
          return <p className="follower" key={repo.name}>{repo.name} </p>
            })}
            </div>

        )
    }

/*{repos}
 {this.props.name.map(follower => {
          return <p className="follower" key={follower}>{follower} </p>
            })}
*/


export default Repos