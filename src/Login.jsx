import React from 'react'
import { Link, useNavigation } from 'react-router-dom';

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5173/login', 
        {email, password})
        .then(result => {console.log(result)
        navigate('/home')
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
    <div className='bg-white p-3 rounded w-25'>
        <h2>Login</h2>
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
           
        </form>
        <p>Already have an Account</p>
        <Link to="/home" 
        className='btn btn-default border w-100 bg-light'>
            Login</Link>
    </div>
</div>
  )
}

export default Login