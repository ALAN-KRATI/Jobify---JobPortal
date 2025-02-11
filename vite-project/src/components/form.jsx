import React from "react";
import {useState} from "react";
import axios from "axios";

const Form = ()=>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(name);

        axios.post('http://localhost:2489/test',{name,email,password})
        .then(result =>{
            console.log(result);
            console.log("Successfully Registered");
        })
        .catch(err =>{
            console.log(err);
        })
    }

    return(
        <>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
                <input type="text" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="text" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
                <button>Submit</button>
            </form>
        </>
    )
}

export default Form;