import React, {useState} from "react"
import { NavLink } from "react-router-dom"
import UserForm from "./UserForm"

const UserCard = (props) =>{
    const[user, setUser] = useState("");
    const[login, setLogin] =  useState("");
    const[location, setLocation] = useState("");
    const[bio, setBio] = useState("")
    const giveBackDataToCard = (login , user, location, bio) => {
       setLogin(login);
       setUser(user);
       setLocation(location);
       setBio(bio);

    }

        return(
         <div className = "Card">
            <UserForm props={props} function = {giveBackDataToCard}/> 
            <h1>Hello, {login}</h1>
            <h2>How is the weather in {location}?</h2>
            <h3>Here's a little about you </h3>
            <p>{bio}</p>
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