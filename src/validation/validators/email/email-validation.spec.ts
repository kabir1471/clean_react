import { faker } from '@faker-js/faker'
import { InvalidFieldError } from '../../../validation/errors'
import { EmailValidation } from './email-validation'

describe('Email Validation', () => {
  test('Should return error if email is invalid', () => {
    const sut = new EmailValidation(faker.random.word())
    const error = sut.validate(faker.random.word())
    expect(error).toEqual(new InvalidFieldError())
  })
  test('Should return falsy if email is invalid', () => {
    const sut = new EmailValidation(faker.random.word())
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
})
