import React from 'react'
import axios from 'axios'
import { useState } from 'react';
const form = () => {
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const [username, setUsername] = useState({});
 
  const submithandler=(e)=>{
    e.preventDefault()
    console.log(username);
    
    console.log(email);
    console.log(password);
   
    
    axios.post("http://localhost:3000/form", {username,email, password})
    .then((e)=>{
      console.log(e);
      
    })
    .catch((err)=>{
      console.log(err);
      
    })
  }

  return (
    <div>
       <form onSubmit={submithandler}>
       <label htmlFor="username">Username :</label>
       <input
        type="text"
        name='username'
        placeholder='Anurag'
        onChange={(e) => {
          setUsername(e.target.value)
        }}
       />
       <br/>
       <label htmlFor="email">Email: </label>
         <input
          type="text"
          name="email"
          placeholder="anurag@gmail.com"
             
          onChange={(e) =>{
                  setEmail(e.target.value)
              }}
         />
         <br/>
         <br/>
         <label htmlFor="password">password: </label>
         <input
          type="text"
          name="password"
          placeholder="12345"
          onChange={(e) => {
                setPassword(e.target.value)
              }}
         />
         <br/>
         <button type="submit">Submit</button>
       </form>
    </div>
  )
}
export default form

