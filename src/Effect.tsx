import React from 'react';
import { useEffect, useState } from 'react';
import UserCard from './UserCard';

interface User {
    name: string;
    email: string;
    phone: string;
}

const Effect = () => {
    const [users, setUsers] = useState<Array<User>>([]);
    const [filteredUsers, setFilteredUsers] = useState<Array<User>>([]);
    
    const [search, setSearch] = useState('');
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

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
        console.log('useEffect fetch called');
    }, []);

    useEffect(() => {
        setFilteredUsers(
            users.filter(user => {
                return user.name.toLowerCase().includes(search.toLowerCase());
            })
        )
    }, [users, search]);
    
    return (
    <div>
        <h1>Effect</h1>
        {filteredUsers.slice(0,5).map((user, index) => {
            return <UserCard 
                key={index} 
                name={user.name || 'No name'}
                email={user.email || 'No email'}
            />
        })}
        <label htmlFor="search">Search user: </label>
        <input id="search" type="text" value={search} onChange={handleSearch} />
    </div>
    )
}

export default Effect;