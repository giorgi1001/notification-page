import { useState } from "react";
import data from "./data.json";

import "./App.css";

function App() {
  const [notifications, setNotifications] = useState(data);

  return (
    <>
      <section className="section">
        <div className="starter">
          <h1>
            Notifications <span>{notifications.length}</span>
          </h1>
          <span className="all-read">Mark all as read</span>
        </div>

        <main>
          {notifications.map((notification) => {
            return (
              <div key={notification.id} className="notification-div">
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
                  <div className="circle"></div>
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
