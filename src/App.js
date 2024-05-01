import React, { useState } from "react";
import Header from "./Components/Header.js";
import Users from "./Components/Users.js";
import AddUsers from "./Components/AddUsers.js";

import './css/main.css';
import { v4 as uuidv4 } from 'uuid';




function App() {
  const [users, setUsers] = useState([
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
  ])


  const [selectedUserId, setSelectedUserId] = useState(null);


  function editUser(user) {
    setSelectedUserId(user.id);
    setUsers(prevUsers => {
      return prevUsers.map(prevUser => {
        if (prevUser.id === user.id) {
          return user
        } else {
          return prevUser
        }
      })
    })
  }


  function globalChange(newUser) {
    const id = uuidv4().split('-')[0];
    setUsers([...users, {...newUser, id}]);
  }


  function deleteUser(id) {
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
    <div>
      <Header title="List of People" />
        <div className="container">
          <main>
           <Users users={users} onDelete={deleteUser} onEdit={editUser} />
          </main>
          <aside>
            <AddUsers onAdd={globalChange} userId={selectedUserId} users={users} />
          </aside>
        </div>
    </div>
  );
}

export default App;
