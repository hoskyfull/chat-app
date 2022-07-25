import { getSuggestedQuery } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { useChatContext } from "stream-chat-react";
import { SearchIcon } from '../assets'

// working on the search bar for the page
const ChannelSearch = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const getChannels = async ( text ) => {
    try{
      //TODO: fetch channels
    }catch (error) {
      setQuery('')
    }
  }

//logic that makes search fucnitonality work
  const onSearch = (event) => {
    event.preventDefault();
    setLoading(true);
    getSuggestedQuery(event.target.value)
    getChannels(event.target.value)
  };

  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <SearchIcon />
        </div>
        <input
          className="channel-search__input__text"
          placeholder="Search"
          type={query}
          onChange={onSearch}
        />
      </div>
    </div>
  );
};

export default ChannelSearch