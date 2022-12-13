import React from 'react'
import Img from '../img/addAvatar.png'

const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo">Letz Chat!</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder='Display Name' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <input style={{display:"none"}} type="file" id='file'/>
          <label htmlFor="file">
            <img src={Img} alt="" />
            <span>Add an Avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Already Signed up? Login </p>
      </div>
    </div>
  )
}

export default Register
