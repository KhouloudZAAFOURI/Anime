import React from 'react'
import "./Title.css"; 

export default function Title({subtitle, title}) {
  return (
    <div style={{backgroundColor:"black", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        <h5 style={{color:"white", fontSize:"15px"}}> {subtitle} </h5>
        <h1 style={{color: '#e3d704', fontWeight:"bolder"}}> {title} </h1>
    </div>
  )
}