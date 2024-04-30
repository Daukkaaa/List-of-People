import React from "react";

const User = (props) => {
  return (
    <div className="user" key={props.user.id}>
      <div className="all-items">
        <div className="img-icon">
          <img src={props.user.avatar} />
        </div>
        <div className="profile">
          <p>{props.user.id}</p>
          <h3>
            {props.user.first_name} {props.user.last_name}
          </h3>
          <p>{props.user.email}</p>
          <b>{props.user.isHappy ? "Happy :)" : "Not Happy :("}</b>
        </div>
      </div>
    </div>
  );
};

export default User;
