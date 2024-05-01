import React, { useState } from "react";
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5';
import AddUsers from "./AddUsers.js";

const User = (props) => {
  const [edit, setEdit] = useState(false);

  function Edit() {
    setEdit(!edit)
  }

  return (
    <div className="user" key={props.user.id}>
      <IoCloseCircleSharp className="delete-icon" onClick={() => props.onDelete(props.user.id)} />
      <IoHammerSharp className="edit-icon" onClick={Edit} />
      <div className="all-items">
      <div className="img-con">
        <img src={props.user.avatar}  />
      </div>
      <div className="profile">
      <h3>
        {props.user.first_name} {props.user.last_name}
      </h3>
      <p>{props.user.email}</p>
      <b>{props.user.isHappy ? "Happy :)" : "Not Happy :("}</b>
      </div>
      </div> 

      {edit && <AddUsers onAdd={props.onEdit} userId={props.user.id} />}
    </div>
  );
};

export default User;

