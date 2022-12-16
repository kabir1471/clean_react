import React from 'react'
import Styles from './login-styles.scss'
import Spinner from '../components/spinner/Spinner'
import LoginHeader from '../components/login-header/LoginHeader'
import Footer from '../components/footer/Footer'
import Input from '../components/input/Input'

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
      <div className={Styles.errorWrap}>
        <span className={Styles.error}>Error</span>
        <Spinner className={Styles.spinner} />
      </div>
    </form>
    <Footer />
  </div>)
}

export default login
