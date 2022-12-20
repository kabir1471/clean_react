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

export type ContextProps = {
  state: StateProps
  setState: (values: StateProps) => void
}

export default createContext({} as ContextProps)
