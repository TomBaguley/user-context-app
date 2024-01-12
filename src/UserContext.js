import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState();

    const toggleUser = () => {
        setUser((prevUser) => (prevUser === 'Tom' ? 'Bryan' : 'Tom'));
    };

    return (
        <UserContext.Provider value = {{ user, toggleUser}}>
            {children}
        </UserContext.Provider>
    );
};

const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    };
    return context;
};
export { UserProvider, useUser};