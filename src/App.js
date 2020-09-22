import React, { createContext, useState } from "react";
import { ContextA } from "./components/ContextA";

export const UserContext = createContext();
export const HobbyContext = createContext();

const App = () => {
  const [user, setUser] = useState({
    name: "sato",
    age: "24",
  });

  const [hobby, setHobby] = useState("キャンプ");

  const userInfo = {
    user,
    hobby,
  };

  return (
    <div>
      <h1>useContext</h1>
      <UserContext.Provider value={userInfo}>
        <HobbyContext.Provider value={hobby}>
          <ContextA />
        </HobbyContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default App;
