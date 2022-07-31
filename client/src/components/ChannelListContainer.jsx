import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";
import Cookies from "universal-cookie";
import Quaint from "../assets/q.png";
import LogOutIcon from "../assets/logout.png";

const cookies = new Cookies();

//here I will create the side bar of the page
const SideBar = ({ logout }) => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                {/* the name of the app is called Quaint */}
                <img src={Quaint} alt="Quaint" width="30" />
            </div>
        </div>
        {/* created the logout button */}
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner" onClick={logout}>
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

const ChannelListContainer = ({
    isCreating,
    setIsCreating,
    setCreateType,
    setIsEditing,
    setToggleContainer,
}) => {
    const logout = () => {
        cookies.remove("token");
        cookies.remove("userId");
        cookies.remove("username");
        cookies.remove("fullName");
        cookies.remove("avatarURL");
        cookies.remove("hashedPassword");
        cookies.remove("phoneNumber");

        window.location.reload();
    };

    return (
        <>
            <SideBar logout={logout} />
            <div className="channel-list__list__wrapper">
                <ChatHeader />
                <ChannelSearch />
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={() => {}}
                    List={(listProps) => (
                        <TeamChannelList
                            {...listProps}
                            type="team"
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            setCreateType={setCreateType}
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview {...previewProps} type="team" />
                    )}
                />
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={() => {}}
                    List={(listProps) => (
                        <TeamChannelList {...listProps} type="messaging" />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview
                            {...previewProps}
                            type="messaging"
                        />
                    )}
                />
            </div>
        </>
    );
};

export default ChannelListContainer;
