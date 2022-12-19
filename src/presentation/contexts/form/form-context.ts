/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createContext } from 'react'

type StateProps = {
  isLoading: boolean
  mainError: string
  emailError: string
  passwordError: string
  email: string
  password: string
}

type ContextProps = {
  state: StateProps
  setState: (values: StateProps) => void
}

export default createContext({} as ContextProps)
