import React, { useContext } from "react";
import { UserContext, HobbyContext } from "../App";

export const ContextC = () => {
  const userInfo = useContext(UserContext);
  const hobby = useContext(HobbyContext);

  return (
    <p>
      {userInfo.user.name}
      {userInfo.user.age}才: 趣味は{hobby}です。
    </p>
  );
};
