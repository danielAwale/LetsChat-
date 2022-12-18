import React from 'react'
import Img from '../img/addAvatar.png'

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
        <form>
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
