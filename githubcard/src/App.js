import './App.css';
import React from "react";
import axios from "axios";
import { BrowserRouter, Link, Route } from 'react-router-dom';
import UserCard from "./components/Card";
import Followers from "./components/Followers";
import Repos from "./components/Repos";

let followerArray = [];

class App extends React.Component {

  state = {
    user: '' ,
    location : '',
    bio: '',
    followers: [],
    repos: []

  }
   
  //make api calls after the component mounts
  componentDidMount() {
    console.log("Component mounted");
    //get user data
    axios.get("https://api.github.com/users/ovenbakedgoods")
    .then(res => this.setState({
      ...this.state,
      user: res.data.login,
      location: res.data.location,
      bio: res.data.bio,
    }))
      .catch(err => console.log(err));
     
     //get followers
      axios.get("https://api.github.com/users/ovenbakedgoods/followers")
      .then(res => Object.keys(res.data).forEach(key => followerArray.push(res.data[key])))
        .catch(err => console.log(err));

        followerArray.forEach(element => {
          console.log(element);
        });

        console.log("finished")

        //get repos
        axios.get("https://api.github.com/users/ovenbakedgoods/repos")
    .then(res => this.setState({
      ...this.state,
        repos: res.data.name
    }))
      .catch(err => console.log(err));
  }

  
  
  /**this.setState({
        ...this.state,
        followers: [
          ...this.state.followers,
          {
            login: res.data.login,
          }
        ]
      }) */

  render()
  {
    
  return (
    <BrowserRouter>
    <div className="App">
            <Route exact path = "/">
          
          <UserCard  name = {this.state.name} 
          login = {this.state.user} 
          location = {this.state.location} 
          bio = {this.state.bio}
          /> 
    </Route>
    <Route path = "/followers" component={Followers} />
    <Route path = "/repos" component={Repos} />
    </div>
    
    </BrowserRouter>
    

  );
  }
}


export default App;
