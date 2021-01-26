import React, { useState } from 'react'


function Form(props){

const initialFormState = { id: null, name: '', email: '', role: ''};
const [user, setUser] = useState(initialFormState)


const handleChange = event => {

setUser({...user, [event.target.name]: event.target.value})
}

return (
    <form className='form' onSubmit = {event =>{ 
    event.preventDefault(); 
    props.addUser(user); 
    setUser(initialFormState);}}>
        <label>
        Name:
        <input
        type='text' 
        name='name'
        placeholder='name' 
        onChange={handleChange}
         value={user.name} />
        </label>
<br />
        <label>
        Email: 
        <input
        type='email' 
        name='email'
        placeholder='email' 
        onChange={handleChange}
         value={user.email} />
        </label>
<br />
        <select name='role'
            value={user.role}
            onChange={handleChange}
            name='role'>
            <option value=''>---select role---</option>
            <option value='Web Developer'>Web Developer</option>
            <option value='student'>Student</option>
            <option value='ux'>UX</option>
            <option value='Data Scientist'>Data Scientist</option>
          </select>
<br />
          <button>Add new user</button>
    </form>
)


}

export default Form