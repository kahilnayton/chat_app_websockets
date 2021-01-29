import React from "react";
import "./Message.scss";

const Message = ({ user, chat, index, message }) => {
  const determineMargin = () => {
    if (index + 1 === chat.Messages.length) return;

    return message.fromUserId === chat.Messages[index + 1].fromUserId
      ? "ms-5"
      : "ms-10";
  };

  return (
    <div
      className={`message ${determineMargin()} ${
        message.fromUserId === user.id ? "creator" : ""
      }`}
    >
      <div
        className={message.fromUserId === user.id ? "owner" : "other-person"}
      >
        {message.FromUserId !== user.id ? (
          <h6 className="m-0">
            {message.User.firstName} {message.User.lastName}
          </h6>
        ) : null}
        {message.type === "text" ? (
          <p className="m-0">{message.message}</p>
        ) : (
          <img src={message.message} alt="User upload" />
        )}
      </div>
    </div>
  );
};

export default Message;
