import React from 'react';
import { ChannelList, useChatContext  } from 'stream-chat-react';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import Quaint from '../assets/q.png'

const SideBar = () => (
  <div className = "channel-list__sidebar ">
    <div className='channel-list__sidebar__icon1'>
      <div className='icon__inner'>
        <img src={Quaint} alt='Chat' width="30" />
      </div>

    </div>

  </div>
)

const ChannelListContainer = () => {
  return (
    <div>ChannelListContainer</div>
  )
}

export default ChannelListContainer