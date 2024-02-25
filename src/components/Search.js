import React from 'react'
import { CiSearch } from "react-icons/ci";
import "./Search.css"; 

export default function Search() {
  return (
    <div className="search position-relative ">
    <CiSearch />
      <input
        type="search"
        placeholder=" Find Anime..."
      />
</div>
  )
}
