import React from "react";
import "./notifications.css";

export default function Notifications({
  notifications,
  setNotifications,
  notification,
}) {
  const read = (id) => {
    const updatedNotifications = notifications.map((notification) => {
      if (notification.id === id) {
        return { ...notification, isRead: true };
      }
      return notification;
    });
    setNotifications(updatedNotifications);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: !notification.isRead ? "#F7FAFD" : "",
        }}
        className="notification-div"
        onClick={() => read(notification.id)}
      >
        <img
          className="profile-picture"
          src={notification.profilePic}
          alt="profile picture"
        />

        <div>
          <span className="username">{notification.username}</span>
          <span className="action"> {notification.action}</span>
          {notification.post ? (
            <span className="post">{notification.post}</span>
          ) : null}
          {notification.groupName ? (
            <span className="group-name">{notification.groupName}</span>
          ) : null}
          {!notification.isRead ? <div className="circle"></div> : null}
          <p className="time">{notification.time}</p>
          {notification.text ? (
            <div className="text">{notification.text}</div>
          ) : null}
        </div>
        {notification.userPicture ? (
          <img
            className="user-picture"
            src={notification.userPicture}
            alt="user picture"
          />
        ) : null}
      </div>
    </>
  );
}
