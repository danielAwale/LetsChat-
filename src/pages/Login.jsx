import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Img from '../img/addAvatar.png'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {

    } catch {
      setErr(true);
    }
    
  }
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo">Letz Chat!</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button>Sign in</button>
        </form>
        <p>Don't have an account? Register</p>
      </div>
    </div>
  )
}

export default Login
