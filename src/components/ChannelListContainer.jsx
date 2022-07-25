import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";
import Cookies from "universal-cookie";
import Quaint from "../assets/q.png";
import LogOutIcon from "../assets/logout.png";

//here I will create the side bar of the page
const SideBar = () => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon__inner">
        {/* the name of the app is called Quaint */}
        <img src={Quaint} alt="Quaint" width="30" />
      </div>
    </div>
    {/* created the logout button */}
    <div className="channel-list__sidebar__icon2">
      <div className="icon__inner">
        <img src={LogOutIcon} alt="Logout" width="30" />
      </div>
    </div>
  </div>
);

const ChatHeader = () => (
  <div className="channel-list__title">
    <p className="channel-list__header__text"> Quaint Chat </p>
  </div>
);

const ChannelListContainer = () => {
  return (
    <>
      <SideBar />
      <div className="channel-list__list__wrapper">
        <ChatHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => <TeamChannelList {...listProps} type="team" />}
        />
      </div>
    </>
  );
};

export default ChannelListContainer;
