import React, { useState, useEffect } from "react";
import { useChatContext } from "stream-chat-react";
import { SearchIcon } from '../assets'

// working on the search bar for the page
const ChannelSearch = () => {
  const [query, seQuery] = useState('')

  const onSearch = (event) => {
    event.preventDefault();
  }



  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <SearchIcon />
        </div>


      </div>

    </div>
  )
}

export default ChannelSearch