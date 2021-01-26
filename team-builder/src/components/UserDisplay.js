import React from 'react'

const UserDisplay = props => (
    <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                                
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
  
  export default UserDisplay;