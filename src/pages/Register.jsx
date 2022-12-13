import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <form>
          <input type="text" placeholder='Display Name' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <input type="file" />
        </form>
      </div>
    </div>
  )
}

export default Register
