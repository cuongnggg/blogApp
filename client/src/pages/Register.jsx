
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  //call back in setInputs so blank input being sent bcrypt
  const [inputs, setInputs] = useState({ 
    username: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const res = await axios.post("/auth/register", inputs)
      console.log(res)
    }catch(err){
      console.log(err)
    }
  }
 

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='username' name='username' onChange={handleChange} />
        <input required type="email" placeholder='email' name='email' onChange={handleChange} />
        <input required type="password" placeholder='password' name='password' onChange={handleChange} />
        <button onClick={handleSubmit}>Register</button>
        <p>Username or password undetermined</p>
        <span>
          Do you have an account ?
          <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  )
}

export default Register
