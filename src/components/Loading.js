import React from 'react'
import "./Loading.css"
export default function Loading() {
  return (
    <>
    <div id='load' style={{width:'100%',height:'100%',zIndex:'99999999', position:'absolute', top:'0', right:'0', backgroundColor:"transparent"}}>
    <div className='lds-default' style={{top:'50%', left:'50%'}}> 
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    </div>
    </>
  )
}

