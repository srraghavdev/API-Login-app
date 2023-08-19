import React,{useState} from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'

let Login =()=>{
    let [password,Setpassword]=useState('')
    let [username,Setusername]=useState('')
    let [error,Seterror]=useState('')
    let navigate= useNavigate()
    async function getdata(event){
        event.preventDefault()
        console.log(username)
        console.log(password)
        let temp= await fetch('https://dummyjson.com/auth/login',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username:`${username}`,
              password:`${password}`,
            })
          })
          if(temp.status!=200){
            let res= await temp.json()
            Seterror(res.message)
          }
          else{
            let res= await temp.json()
            localStorage.setItem('details',JSON.stringify(res))
            navigate('/profile')
          }
    }
    document.title='Login Page'
    return(
        <div className="container" id='cont'>
        <div className="message" id='me'>Welcome back! 👋</div>
        <div className="head">Sign in to your account</div>
        <div className="formcont">
            <form onSubmit={getdata}>
                <div className="email">
                    <label for="email" id="em">Your User Name : </label><br/>  
                    <input type="text" id="text" value={username} onChange={(event)=>{Setusername(event.target.value)
                    Seterror('')}}/>
                </div>
                <div className="pass">
                    <label for="pass" id="ps">Your Password : </label><br/> 
                    <input type="password" id="pass" value={password} onChange={(event)=>{Setpassword(event.target.value)
                    Seterror('')}}/>
                </div>
                <button type="submit" id="contbtn" >CONTINUE</button>
                <div className="dynamic">{error ? error : ''}</div>
            </form>
        </div>
        </div>
    )
}
export default Login