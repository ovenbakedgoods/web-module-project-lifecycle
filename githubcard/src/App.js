import './App.css';
import React from "react";
import axios from "axios";
import { BrowserRouter, Link, Route } from 'react-router-dom';
import UserCard from "./components/Card";
import Followers from "./components/Followers";
import Repos from "./components/Repos";
import UserForm from "./components/UserForm"

let followerArray = [];

class App extends React.Component {

  state = {
    name: '',
    user: '' ,
    location : '',
    bio: '',
    followers: [],
    repos: []

  }
   
  //make api calls after the component mounts --> equivalent to useEffect()
  //componentDidUpdate is equivalent to useEffect(,[])
  componentDidMount() {
    console.log("Component mounted");
    //get user data
   
        console.log("finished")

        //get repos
       
  }

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
