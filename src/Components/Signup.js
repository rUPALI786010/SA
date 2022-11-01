import React, {useState} from 'react'
import "./Signup.css"
import M from 'materialize-css'
import {Link, useNavigate} from 'react-router-dom';

const Signup = () => {
  const history = useNavigate()
  const [name,setName] = useState("")
  const [userName,setuserName] = useState("")
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  const PostData =()=>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
      return
    }
    fetch('/signup',{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        userName,
        email,
        password
      })
    }).then(res=>res.json())
    .then(data=>{
      if(data.error){
        M.toast({html: data.error,classes:"#c62828 red darken-3"})
      }
      else {
        M.toast({html: data.msg,classes:"#43a047 green darken-1"})
        history('/signin')
      }
    })
  }
  return (
    <div className='mycard'>
    <div className='card auth-card'>
      <h2>MakeMyTrip</h2>
      <input
      type="text"
      placeholder='Name'
      value={name}
      onChange={(e)=>{setName(e.target.value)}}
      />
      <input
      type="text"
      placeholder='UserName'
      value={userName}
      onChange={(e)=>{setuserName(e.target.value)}}
      />
      <input
      type="text"
      placeholder='Email'
      value={email}
      onChange={(e)=>{setEmail(e.target.value)}}
      />
      <input
      type="password"
      placeholder='Password'
      value={password}
      onChange={(e)=>{setPassword(e.target.value)}}
      />
      <button class="btn waves-effect waves-light #64b5f6 blue ligthen-2" type="submit" name="action" onClick={()=>PostData()}>Submit</button>
      <h5>
        <Link to="/signin">Already have an account ?</Link>
      </h5>
    </div>
    </div>
  )
}

export default Signup;
