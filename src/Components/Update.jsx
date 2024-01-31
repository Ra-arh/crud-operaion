import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Update() {
 // const [data, setData] = useState([])

  const { id } = useParams();
  useEffect(() =>{
    axios.get('http://localhost:3000/users/' + id)
    .then(res => {
      setValues(res.data);
    })
    .catch(err => console.log(err));
  },[])


  //update
  const [values, setValues] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    address: ''
  })

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put('http://localhost:3000/users/' + id, values)
    .then(res => {
      console.log(res)
      navigate('/')
    })
    .catch(err => console.log(err));
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
      <h1>Update user details</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-2'>
          <label htmlFor="name">Name:</label>
          <input type="text" name='name' className='form-control' placeholder='Enter your Name' value={values.name} onChange={e => setValues({...values, name: e.target.value})}/>
        </div>
        <div className='mb-2'>
          <label htmlFor="name">Username:</label>
          <input type="text" name='username' className='form-control' placeholder='Enter your Username' value={values.username} onChange={e => setValues({...values, username: e.target.value})}/>
        </div>
        <div className='mb-2'>
          <label htmlFor="name">Email:</label>
          <input type="email" name='email' className='form-control' placeholder='Enter your Email' value={values.email} onChange={e => setValues({...values, email: e.target.value})}/>
        </div>
        <div className='mb-2'>
          <label htmlFor="name">Phone:</label>
          <input type="number" name='phone' className='form-control' placeholder='Enter your Phone number' value={values.phone} onChange={e => setValues({...values, phone: e.target.value})}/>
        </div>
        <div className='mb-2'>
          <label htmlFor="name">Address:</label>
          <input type="text" name='address' className='form-control' placeholder='Enter your Address' value={values.address} onChange={e => setValues({...values, address: e.target.value})}/>
        </div>
        <button className="btn btn-success">Update</button>
        <Link to='/' className='btn btn-primary ms-3'>Back</Link>
      </form>
    </div>
  </div>
  )
}

