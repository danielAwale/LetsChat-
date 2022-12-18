import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Img from '../img/addAvatar.png'
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';



const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/login")
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
          {err && <span>Something went wrong</span>}
        </form>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  )
}

export default Login
