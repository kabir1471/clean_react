/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState, useEffect } from 'react'
import Styles from './login-styles.scss'
import { LoginHeader, Footer, Input, FormStatus } from '../../components'
import Context from '../../contexts/form/form-context'
import { Validation } from '../../../presentation/protocols/validation'
import { Authentication } from '../../../domain/usecases/authentication'

type Props = {
  validation: Validation
  authentication: Authentication
}

const login: React.FC<Props> = ({ validation, authentication }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    mainError: '',
    email: '',
    password: '',
    emailError: '',
    passwordError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password)
    })
  }, [state.email, state.password])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    if (state.isLoading || state.emailError || state.passwordError) return
    setState({ ...state, isLoading: true })
    await authentication.auth({ email: state.email, password: state.password })
  }

  return (
  <div className={Styles.login}>
    <LoginHeader />
    <Context.Provider value={ { state, setState } }>
    <form data-testid="form" className={Styles.form} onSubmit={handleSubmit}>
      <h2>Login</h2>
        <Input type={'email'} name="email" placeholder='Enter your email' />
        <Input type={'password'} name="password" placeholder='Enter your password' />
      <button data-testid="submit" disabled={!!state.emailError || !!state.passwordError} type='submit' className={Styles.submit}>Login</button>
      <span className={Styles.link}>Create Account</span>
      <FormStatus />
    </form>
    </Context.Provider>
    <Footer />
  </div>)
}

export default login
