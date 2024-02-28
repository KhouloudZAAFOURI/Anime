import React from 'react'

export default function Title({ title}) {
  return (
    <div style={{backgroundColor:"black", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        <h5 style={{color:"white", fontSize:"15px", marginTop:"20px"}}> ONLINE STREAMING   </h5>
        <h1 style={{color: '#e3d704', fontWeight:"bolder", paddingBottom:"30px", textTransform:'uppercase'}}> {title} </h1>
    </div>
  )
}
