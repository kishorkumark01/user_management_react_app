import React, { useState } from "react";
import '../App.css';
const AddUser = ({ onAddUser }) => {
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [count,setCount] = useState();

  const incrementCount = ()=>{
    setCount(count=count+1);
  }
  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      onAddUser(newUser);
      setNewUser({ name: "", email: "" });
    }
  };

  return (
    <div className="">
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleAddUser}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full font-semibold"
      >
        Add User
      </button>
    </div>
  );
};

export default AddUser;
