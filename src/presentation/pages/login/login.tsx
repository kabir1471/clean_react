import React, { useState, useEffect } from 'react'
import Styles from './login-styles.scss'
import { LoginHeader, Footer, Input, FormStatus } from '../../components'
import Context from '../../contexts/form/form-context'
import { Validation } from '../../../presentation/protocols/validation'

type Props = {
  validation: Validation
}

const login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    mainError: '',
    email: '',
    password: '',
    emailError: 'Required',
    passwordError: 'Required'
  })

  useEffect(() => {
    validation.validate('email', state.email)
  }, [state.email])
  useEffect(() => {
    validation.validate('password', state.password)
  }, [state.password])

  return (
  <div className={Styles.login}>
    <LoginHeader />
    <Context.Provider value={ { state, setState } }>
    <form className={Styles.form}>
      <h2>Login</h2>
        <Input type={'email'} name="email" placeholder='Enter your email' />
        <Input type={'password'} name="password" placeholder='Enter your password' />
      <button data-testid="submit" disabled type='submit' className={Styles.submit}>Login</button>
      <span className={Styles.link}>Create Account</span>
      <FormStatus />
    </form>
    </Context.Provider>
    <Footer />
  </div>)
}

export default login
