/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import Input from './Input'
import Context, { ContextProps } from '../../../presentation/contexts/form/form-context'
import { faker } from '@faker-js/faker'

const state = {
  isLoading: false,
  mainError: '',
  email: '',
  password: '',
  emailError: '',
  passwordError: ''
}

const makeSut = (fieldName: string): RenderResult => {
  return render(<Context.Provider value={{ state } as ContextProps}><Input name={fieldName} /></Context.Provider>)
}

describe('Input Component', () => {
  test('should begin with readonly', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const input = sut.getByTestId(field) as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })
  test('should remove readonly on focus', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const input = sut.getByTestId(field) as HTMLInputElement
    fireEvent.focus(input)
    expect(input.readOnly).toBe(false)
  })
})
