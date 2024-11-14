import React from 'react';

export const AuthContext = React.createContext({ loggedIn: false});

export function useAuth() {
    return React.useContext(AuthContext);
}