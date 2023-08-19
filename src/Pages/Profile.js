import { useState,useEffect } from "react"
import React from 'react'
import './profile.css'
let Profile = ()=>{
    let [data,Setdata]=useState('')
   useEffect(()=>{
        let obj=JSON.parse(localStorage.getItem('details'))
        console.log(obj)
         fetch(`https://dummyjson.com/users/${obj.id}`).then((data)=>data.json()).then(data=>{console.log(data)
        localStorage.setItem('info',JSON.stringify(data))
        Setdata(data)}).catch(error=>console.log(error))  
    },[])
    document.title='Profile Page'
    return (
    <div className="container">
    <div className="message">Profile</div>
    {data && <div className='parent'>
    <div className="profileimg">
        <img src={data.image}/>
    </div>    
    <div className="name">First Name : {data.firstName}</div>
    <div className="name">Last Name : {data.lastName}</div>
    <div className="birthdate">Maiden Name : {data.maidenName}</div>
    <div className="id">ID: {data.id}</div>
    <div className="username">UserName : {data.username}</div>
    <div className="pass">Password : {data.password}</div>
    <div className="email">Email : {data.email}</div>
    <div className="gender">Gender : {data.gender}</div>
    <div className="age">Age : {data.age}</div>
    <div className="height">Height : {data.height} cm</div>
    <div className="weight">Weight : {data.weight} kg</div>
    <div className="pass">Password : {data.password}</div>
    <div className="birthdate">Birth Date : {data.birthDate}</div>
    <div className="bloodgroup">Blood Group :{data.bloodGroup}</div>
    <div className="eyecolor">Eye Color: {data.eyeColor}</div>
    <div className="phone">Phone Number : {data.phone}</div>
    <div className="ssn">SSN : {data.ssn}</div>
    <div className="ip">IP : {data.ip}</div>
    <div className="haircolor">Hair Color : {data.hair.color}</div>
    <div className="hairtype">Hair Type : {data.hair.type}</div>  
    <div className="uni">University : {data.university}</div>
    <div className="address">Home Address : {data.address.address+','+data.address.city+','+data.address.postalCode+','+data.address.state}</div>
    <div className="addlat">Home Address Latitude : {data.address.coordinates.lat}</div>
    <div className="addlng">Home Address Longitude : {data.address.coordinates.lng}</div> 
    <div className="caddress">Company Address : {data.company.address.address+','+data.company.address.city+','+data.company.address.postalCode+','+data.company.address.state}</div>
    <div className="caddlat">Company Address Latitude : {data.company.address.coordinates.lat}</div>
    <div className="caddlng">Company Address Longitude : {data.company.address.coordinates.lng}</div>
    <div className="cpos">Title : {data.company.title}</div>
    <div className="cdep">Department : {data.company.department}</div>
    <div className="cname">Company Name : {data.company.name}</div>
    <div className="macadd">MAC Address : {data.macAddress}</div>
    <div className="domain">Domain : {data.domain}</div>
    <div className="ein">EIN : {data.ein}</div>
    <div className="cardno">Card Number : {data.bank.cardNumber}</div>
    <div className="cardexpire">Card Expire : {data.bank.cardExpire}</div>
    <div className="cardType">Card Type : {data.bank.cardType}</div>
    <div className="cardcurrency">Card Currency : {data.bank.currency}</div>
    <div className="iban">IBAN : {data.bank.iban}</div>
            </div>
    }
    <div className="dynamic">Login Successfull!</div>
        </div>   
    )
    
}
export default Profile