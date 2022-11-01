import React, {useState} from 'react'
import "./Signup.css"
import M from 'materialize-css'
import {Link, useNavigate} from 'react-router-dom';

function Signin() {
  const history = useNavigate()
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    const PostData = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               M.toast({html:"signedin success",classes:"#43a047 green darken-1"})
               history('/')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
  return (
    <div className='mycard'>
    <div className='card auth-card'>
      <h2>MakeMyTrip</h2>
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
      onChange={(e)=>{setPasword(e.target.value)}}
      />
      <button class="btn waves-effect waves-light #64b5f6 blue ligthen-2" type="submit" name="action" onClick={()=>{PostData()}}>Submit</button>
    </div>
    </div>
  )
}

export default Signin;
