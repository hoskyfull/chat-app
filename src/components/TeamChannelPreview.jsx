import React from "react";
import { Avatar, useChatContext } from "stream-chat-react";

const TeamChannelPreview = ({ channel, type }) => {
  const { channel: activateChannel, client } = useChatContext();
  const ChannelPreview = () => (
    <p className="chanel-preview__item">
      # {channel?.data?.name || channel?.data?.id}
    </p>
  );
  return <div>TeamChannelPreview</div>;
};

export default TeamChannelPreview;
