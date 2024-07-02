import { useState } from "react";
import data from "./data.json";

import "./App.css";

function App() {
  const [notifications, setNotifications] = useState(data);

  const counter = notifications.filter((notification) => !notification.isRead);

  const read = (id) => {
    const updatedNotifications = notifications.map((notification) => {
      if (notification.id === id) {
        return { ...notification, isRead: true };
      }
      return notification;
    });
    setNotifications(updatedNotifications);
  };

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => {
      return { ...notification, isRead: true };
    });
    setNotifications(updatedNotifications);
  };

  return (
    <>
      <section className="section">
        <div className="starter">
          <h1>
            Notifications <span>{counter.length}</span>
          </h1>
          <span onClick={markAllAsRead} className="all-read">
            Mark all as read
          </span>
        </div>

        <main>
          {notifications.map((notification) => {
            return (
              <div
                style={{
                  backgroundColor: !notification.isRead ? "#F7FAFD" : "",
                }}
                key={notification.id}
                className="notification-div"
                onClick={() => read(notification.id)}
              >
                <img src={notification.profilePic} alt="profile picture" />

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
              </div>
            );
          })}
        </main>
      </section>
    </>
  );
}

export default App;
