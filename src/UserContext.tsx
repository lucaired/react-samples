import { createContext, useState } from "react";

interface User {
    name: string;
    email: string;
    loggedIn: boolean;
}

// This is the context that will be used to provide the user to all of the
// components that are children of the UserProvider component. We have
// to type the context so that we can use it in the UserProvider component.
// Also a default value is provided.
export const UserContext = createContext<{
    user: User | null;
    setUser: (user: User) => void;
}>({
    user: null,
    setUser: (user: User) => {}
});

interface UserProviderProps {
    children: JSX.Element[];
}

// This is a component that will wrap the entire app. It will provide the
// UserContext to all of the components that are children of this component.
export const UserProvider = ((props: UserProviderProps) => {
    const { children } = props;

    const [user, setUser] = useState<User | null>(null);
    const value = { user, setUser };

    return (
            <UserContext.Provider 
                value={value}
            >
                {children}
            </UserContext.Provider>
    )
});