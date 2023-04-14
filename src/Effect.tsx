import React from 'react';
import { useEffect, useState } from 'react';
import UserCard from './UserCard';
import { useUsersAPI, User } from './useUsersAPI';

const Effect = () => {
    const users: Array<User> = useUsersAPI();

    const [filteredUsers, setFilteredUsers] = useState<Array<User>>([]);
    
    const [search, setSearch] = useState('');
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    useEffect(() => {
        setFilteredUsers(
            users.filter(user => {
                return user.name.toLowerCase().includes(search.toLowerCase());
            })
        )
    }, [users, search]);

    console.log('Effect component called');

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