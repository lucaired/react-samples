import { useState, useEffect } from 'react';

export interface User {
    name: string;
    email: string;
    phone: string;
}

export const useUsersAPI = () => {
    const [users, setUsers] = useState<Array<User>>([]);
        // To prevent infinite loop, we need to add an empty array as the second argument
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        // This is necessary because useEffect cannot be async
        const fetchData = async () => {
            const users = await fetch('https://jsonplaceholder.typicode.com/users');
            const usersJson = await users.json();
            const usersArray = usersJson.map((user: any) => {
                return {
                    name: user.name,
                    email: user.email,
                    phone: user.phone
                }
            });
            setUsers(usersArray);
        }
        fetchData();
        console.log('useUsersAPI effect called');
    }, []);
    return users;
}