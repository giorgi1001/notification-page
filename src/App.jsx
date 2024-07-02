import { useState } from "react";
import data from "./data.json";
import "./App.css";
import Starter from "./components/starter/Starter";
import Notifications from "./components/notifications/Notifications";

function App() {
  const [notifications, setNotifications] = useState(data);

  return (
    <>
      <section className="section">
        <Starter
          notifications={notifications}
          setNotifications={setNotifications}
        />
        <main>
          {notifications.map((notification) => {
            return (
              <Notifications
                key={notification.id}
                notification={notification}
                notifications={notifications}
                setNotifications={setNotifications}
              />
            );
          })}
        </main>
      </section>
    </>
  );
}

export default App;
