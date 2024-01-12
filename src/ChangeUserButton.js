import React from "react";
import { useUser } from './UserContext';

const ChangeUserButton = () => {
    const { user, toggleUser} = useUser();

    return (
        <button onClick={toggleUser} >
            Change User
        </button>
    );
};

export default ChangeUserButton;