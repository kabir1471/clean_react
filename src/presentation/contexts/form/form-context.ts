/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createContext } from 'react'

type StateProps = {
  isLoading: boolean
  errorMessage: string
  emailError: string
  passwordError: string
}

export default createContext({} as StateProps)
