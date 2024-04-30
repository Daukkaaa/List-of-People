import React from "react";
import User from "./User.js";

const Users = () => {
    const users = [
        {
            id: 1,
            first_name: 'Daulet',
            last_name: 'Zumgali',
            email: 'dauka@gmail.com',
            isHappy: true
        },
        {
            id: 2,
            first_name: 'Alikhan',
            last_name: 'Abylazy',
            email: 'kotyr@gmail.com',
            isHappy: true
        }
    ]

    return (
        <div>
            {users.map((user) => (
                <User user={user} key={user.id} />
            ))}
        </div>
    )
}


export default Users;