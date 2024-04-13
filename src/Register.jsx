import React, { useState } from 'react'
import { Link, useNavigation } from 'react-router-dom';

const Register = () => {

    const [name, setName] =useState()
    const [dob, setDob] =useState()
    const [email, setEmail] =useState()
    const [password, setPassword] =useState()
    // const navigate = useNavigation()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5173/register', 
        {name, dob, email, password})
        .then(result => {console.log(result)
        navigate('/login')
        })
        .catch(err => console.log(err))
    }


  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='email'>
                        {/* <strong>Name</strong> */}
                    </label>

                    <input type='text' 
                    placeholder='enter your Name'
                    autoComplete='off'
                    name='name'
                    className='form-contrel w-100 rounded-0'
                    onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>

                <div className='mb-3'>
                    <label htmlFor='DOB'>
                        {/* <strong>DOB</strong> */}
                    </label>

                    <input type='Date' 
                    placeholder='enter your Date of Birth'
                    autoComplete='off'
                    name='DOB'
                    className='form-contrel w-100 rounded-0'
                    onChange={(e) => setDob(e.target.value)}
                    ></input>
                </div>

                <div className='mb-3'>
                    <label htmlFor='email'>
                        {/* <strong>Email</strong> */}
                    </label>

                    <input type='text' 
                    placeholder='enter your email'
                    autoComplete='off'
                    name='email'
                    className='form-contrel w-100 rounded-0'
                    onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>

                <div className='mb-3'>
                    <label htmlFor='password'>
                        {/* <strong>Password</strong> */}
                    </label>
                    <input type='password' 
                    placeholder='enter your Password'
                    autoComplete='off'
                    name='password'
                    className='form-contrel w-100 rounded-0'
                    onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>

                <Link type='submit' to="/login"
                className="btn btn-success w-100 rounded-0">
                    Register</Link>
            </form>
            <p>Already have an Account</p>
            <Link to="/login" 
            className='btn btn-default border w-100 bg-light'>
                Login</Link>
        </div>
    </div>
  )
}

export default Register;