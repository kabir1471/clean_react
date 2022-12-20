/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'
import { render } from '@testing-library/react'
import Input from './Input'
import Context, { ContextProps } from '../../../presentation/contexts/form/form-context'

const state = {
  isLoading: false,
  mainError: '',
  email: '',
  password: '',
  emailError: '',
  passwordError: ''
}

describe('Input Component', () => {
  test('should begin with readonly', () => {
    const { getByTestId } = render(<Context.Provider value={{ state } as ContextProps}><Input name='field' /></Context.Provider>)
    const input = getByTestId('field') as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })
})
