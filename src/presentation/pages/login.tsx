import React from 'react'
import Styles from './login-styles.scss'
import Logo from '../components/logo/Logo'
import Spinner from '../components/spinner/Spinner'

const login: React.FC = () => {
  return (
  <div className={Styles.login}>
    <header className={Styles.header}>
      <Logo />
      <h1>Dev - Adv course for prog</h1>
    </header>
    <form className={Styles.form}>
      <h2>Login</h2>
      <div className={Styles.inputWrap}>
        <input type={'email'} name="email" placeholder='Enter your email' />
        <span className={Styles.status}>*</span>
      </div>
      <div className={Styles.inputWrap}>
        <input type={'password'} name="password" placeholder='Enter your password' />
        <span className={Styles.status}>*</span>
      </div>
      <button type='submit' className={Styles.submit}>Login</button>
      <span className={Styles.link}>Create Account</span>
      <div className={Styles.errorWrap}>
        <span className={Styles.error}>Error</span>
        <Spinner className={Styles.spinner} />
      </div>
    </form>
    <footer className={Styles.footer}>
    </footer>
  </div>)
}

export default login
