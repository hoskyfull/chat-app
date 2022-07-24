import React from 'react';
import { StreamChat } from 'stream-chat';
import { ChannelList, Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelContainer, ChannelListContainer } from './components';
import './App.css';



const api_key = process.env.API_KEY
const client = StreamChat.getInstance(api_key)

const App = () => {
  return (
    <div className='app__wrapper'>
        <Chat client={client} theme="team light">
            <ChannelListContainer />
            <ChannelContainer />
        </Chat>
        </div>
  )
}

export default App