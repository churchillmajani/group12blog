import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const signIn = async (email, password) => {
        // Implement sign in logic here
        setCurrentUser({ email });
    };

    const signUp = async (email, password) => {
        // Implement sign up logic here
        setCurrentUser({ email });
    };

    const signOut = () => {
        // Implement sign out logic here
        setCurrentUser(null);
    };

    return (
        <AuthContext.Provider value={{ currentUser, signIn, signUp, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};
