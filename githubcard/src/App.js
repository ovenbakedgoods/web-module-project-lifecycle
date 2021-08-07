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
     
   
        console.log("finished")

        //get repos
       
  }

  render()
  {
    console.log(this.state.repos, "log the state of the repos")
    console.log(this.state.followers, "log the state of the followers")
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
    <Route path = "/followers"  followers ={this.state.followers}>
    <Followers />
    </Route>
    <Route path = "/repos">
    <Repos repos={this.state.repos}/>
    </Route>
    </div>
    
    </BrowserRouter>
    

  );
  }
}

export default App;
