import { useState } from 'react'
import Link from 'next/link'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // validate credentials and log in
  }

  return (
    <form className='login-form' onSubmit={(e) => handleSubmit(e)}>
      <label className='login-label' htmlFor='email'>
        Email Id
      </label>
      <input
        className='login-input'
        id='email'
        type='email'
        placeholder='Email Id'
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className='login-label' htmlFor='password'>
        Password
      </label>
      <input
        className='login-input'
        id='password'
        type='password'
        placeholder='Password'
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <span className='login-link'>
        <Link href='/forgot-password'>Forgot Password?</Link>
      </span>
      <button type='submit' className='submit-btn'>
        Submit
      </button>
      <hr className='form-divider' />
      <p className='signup-text'>
        Don't have an account?{' '}
        <span className='login-link'>
          <Link href='/signup'>Sign Up</Link>
        </span>
      </p>
    </form>
  )
}

export default LoginForm
