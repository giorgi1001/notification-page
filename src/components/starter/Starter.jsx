import React from "react";
import "./starter.css";

export default function Starter({ notifications, setNotifications }) {
  const counter = notifications.filter((notification) => !notification.isRead);
  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => {
      return { ...notification, isRead: true };
    });
    setNotifications(updatedNotifications);
  };

  return (
    <div className="starter">
      <h1>
        Notifications <span>{counter.length}</span>
      </h1>
      <span onClick={markAllAsRead} className="all-read">
        Mark all as read
      </span>
    </div>
  );
}
