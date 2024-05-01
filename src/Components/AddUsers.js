import React, { useState } from "react";

const AddUsers = (props) => {
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [avatar, setAvatar] = useState('')
    const [isHappy, setIsHappy] = useState(true)

    function FirstnameChange(e) {
        setFirstName(e.target.value)
    }
    function LastnameChange(e) {
        setLastName(e.target.value)
    }
    function emailChange(e) {
        setEmail(e.target.value)
    }
    function avatarChange(e) {
        setAvatar(e.target.value)
    }
    function isHappyChange(e) {
        setIsHappy(e.target.value)
    }

    function globalChange() {
        const newUser = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            avatar: avatar,
            isHappy: isHappy,
            id: props.userId
        };

        props.onAdd(newUser);

        setFirstName('');
        setLastName('');
        setEmail('');
        setAvatar('');
        setIsHappy('');
    }


  return (
    <form>
        <input 
            placeholder="Firstname"
            value={first_name}
            onChange={FirstnameChange}
        />
        <input 
            placeholder="Lastname"
            value={last_name}
            onChange={LastnameChange}
        />
        <input 
            placeholder="email@gmail.com"
            value={email}
            onChange={emailChange}
        />
        <input 
            placeholder="avatar"
            value={avatar}
            onChange={avatarChange}
        />
        <label htmlFor="isHappy">Happy?</label>
        <input 
            type='checkbox'
            id="isHappy"
            value={isHappy}
            onChange={isHappyChange}
        />
        <button onClick={globalChange} type="button">Add</button>
    </form>
  );
};

export default AddUsers;


