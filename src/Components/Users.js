import React from "react";
import User from "./User.js";


const Users = (props) => {

    if (props.users.length > 0)
    return (
        <div>
            {props.users.map((user) => (
                <User user={user} key={user.id} onDelete={props.onDelete} onEdit={props.onEdit} />
            ))}
        </div>
    )
    else 
    return (
        <div className="user">
            <h3>There are no users</h3>
        </div>
    )
};

export default Users;


