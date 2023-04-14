import React from 'react';

interface UserCardProps {
    name: string;
    email: string;
}

const UserCard = (props: UserCardProps) => {
    const { name, email } = props;

    return (
        <div className="UserCard">
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default UserCard;