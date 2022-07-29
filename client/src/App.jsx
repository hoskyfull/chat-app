import React from "react";
import { StreamChat } from "stream-chat";
import { ChannelList, Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelContainer, ChannelListContainer, Auth } from "./components";
import "./App.css";

const cookies = new Cookies();

const api_key = process.env.API_KEY;
const authToken = cookies.get("token");

const client = StreamChat.getInstance(api_key);

if (authToken) {
    client.connectUser({
        id: cookies.get("userId"),
        token: cookies.get("token"),
        username: cookies.get("username"),
        fullName: cookies.get("fullName"),
        phoneNumber: cookies.get("phoneNumber"),
        avatarURL: cookies.get("avatarURL"),
        hashedPassword: cookies.get("hashedPassword"),
    });
}

const App = () => {
    if (!authToken) return <Auth />;

    return (
        <div className="app__wrapper">
            <Chat client={client} theme="team light">
                <ChannelListContainer />
                <ChannelContainer />
            </Chat>
        </div>
    );
};

export default App;
