import React, { useState } from 'react'
import Styles from './login-styles.scss'
import { LoginHeader, Footer, Input, FormStatus } from '../../components'
import Context from '../../contexts/form/form-context'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}

const login: React.FC = () => {
  const [state] = useState<StateProps>({ isLoading: false, errorMessage: '' })
  return (
  <div className={Styles.login}>
    <LoginHeader />
    <Context.Provider value={state}>
    <form className={Styles.form}>
      <h2>Login</h2>
        <Input type={'email'} name="email" placeholder='Enter your email' />
        <Input type={'password'} name="password" placeholder='Enter your password' />
      <button type='submit' className={Styles.submit}>Login</button>
      <span className={Styles.link}>Create Account</span>
      <FormStatus />
    </form>
    </Context.Provider>
    <Footer />
  </div>)
}

export default login
