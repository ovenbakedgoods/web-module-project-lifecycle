import React,{useEffect, useState} from "react";
import {Form, Button} from "react-bootstrap"
import axios from "axios";
import UserCard from "./Card";

const UserForm = (props) => {

    const[user, setUser] = useState("");
    const[login, setLogin] =  useState("");
    const[location, setLocation] = useState("");
    const[bio, setBio] = useState("")
  
    const handleChange = (e) =>{
        setUser(e.target.value);
        console.log(props.props, "props")
        console.log(props.function, "function")
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.get(`https://api.github.com/users/${user}`)
        .then((res => 
            {
                setLogin(res.data.login);
                setLocation(res.data.location);
                setBio(res.data.bio);
                console.log("login", login);
                console.log("e target value", res.data.bio);
                (console.log("resdata", res.data))
                props.function(login,e.target.value, location, bio);

            })
        )
          .catch(props.function("There was no match for that user"));
    }

    return (
        
        <div className = "Form">
        <Form  onSubmit={handleSubmit} onChange={handleChange} spellcheck="false" >
       <Form.Group controlId="formName">
            <Form.Label> Github Handle </Form.Label>
            <Form.Control type="text" placeholder="Enter Handle Here" />
        </Form.Group>
        <Button onClick = {handleSubmit}>Submit</Button>
        
        </Form>

        </div>
    )
}

export default UserForm;