import React, { useState } from 'react'
import Form from "./components/Form"
import UserDisplay from "./components/UserDisplay"
import './App.css';





function App() {

  const userData = [
    {id: 1, name: 'Catherine', email: 'cat@gmail.com', role: 'Web Developer'}
  ];


const initialFormState = { id: null, name: '', email:'', role: '---select role---'}
const [member, setMember] = useState(initialFormState);
const [users, setUsers] = useState(userData);


const addUser = user => {
  user.id = users.length + 1;
  setUsers([...users, user]);
}


  return (
    <div className="App">
      <h2>Add User</h2>
  <Form addUser={addUser} />
  <h2>View Users</h2>
  <UserDisplay users={users} />
    </div>
  );
}

export default App;
