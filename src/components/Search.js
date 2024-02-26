import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import './Search.css';
import SearchResultComponent from './SearchResultComponent';

export default function Search() {

  const [SearchAnime, setSearchAnime] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  
  const handleChange = (e) => {
    setSearchAnime(e.target.value);
  };

  async function handleSearch () {
    try {
      await fetch(`https://api.jikan.moe/v4/anime?q=${SearchAnime}&sfw`)
      .then (data => data.json())
      .then (searchResult => setSearchResult(searchResult.data || [])); 

    } catch (error) {
      console.error('Error fetching Anime to Search', error);
      setSearchResult([]);
    }
  };
  console.log (searchResult); 

  return (
    <>
    <div className="search position-relative">
      <CiSearch />
      <input
        type="search"
        placeholder=" Find Anime..."
        value={SearchAnime}
        onChange={handleChange}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
      />
    </div>
      {/* Pass SearchAnime and searchResult as props to SearchResultComponent */}
      <SearchResultComponent SearchAnime={SearchAnime} searchResult={searchResult} />
    </>
  );
}
