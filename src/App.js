import React, { useState } from "react";
import Header from "./Components/Header.js";
import Users from "./Components/Users.js";
import AddUsers from "./Components/AddUsers.js";

import './css/main.css';



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

  function globalChange(newUser) {
    const id = users.length + 1
    setUsers([...users, {id, ...newUser}])
  }

  return (
    <div>
      <Header title="List of People" />
        <div className="container">
          <main>
           <Users users={users} />
          </main>
          <aside>
            <AddUsers onAdd={globalChange} />
          </aside>
        </div>
    </div>
  );
}

export default App;
