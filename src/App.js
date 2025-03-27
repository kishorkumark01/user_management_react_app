import './App.css';
import AddUser from './components/AddUser';
import React, { useState } from "react";
//import { Trash2, Edit } from "lucide-react";

function App() {
 const [users, setUsers] = useState([]);
  



  const handleAddUser = (user) => {
    setUsers([...users, { id: Date.now(), ...user }]);
  };

  return (
    <div className="container">
      <h2 className="text-2xl font-bold text-center mb-6">User Management</h2>

      {/* Add User Component */}
      <AddUser onAddUser={handleAddUser} />

      {/* User List */}
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-card">
            <div>
              <p className="user-id">
                 {1}
              </p>
              <p className="user-name">{user.name}</p>
              <p className="user-email">{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
