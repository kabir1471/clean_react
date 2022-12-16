import React from 'react'
import Styles from './login-styles.scss'
import LoginHeader from '../components/login-header/LoginHeader'
import Footer from '../components/footer/Footer'
import Input from '../components/input/Input'
import FormStatus from '../components/form-status/FormStatus'

const login: React.FC = () => {
  return (
  <div className={Styles.login}>
    <LoginHeader />
    <form className={Styles.form}>
      <h2>Login</h2>
        <Input type={'email'} name="email" placeholder='Enter your email' />
        <Input type={'password'} name="password" placeholder='Enter your password' />
      <button type='submit' className={Styles.submit}>Login</button>
      <span className={Styles.link}>Create Account</span>
      <FormStatus />
    </form>
    <Footer />
  </div>)
}

export default login
