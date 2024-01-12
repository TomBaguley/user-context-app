import React from "react";
import { useUser } from "./UserContext";

const UserInfoDisplay = () => {
    const { user } = useUser();

    return <div>
        {user === 'Tom' ? "Username: Tom, Email: tom@gmail.com" : "Username: Bryan, Email: bryan@gmail.com"};
    </div>
};

export default UserInfoDisplay;