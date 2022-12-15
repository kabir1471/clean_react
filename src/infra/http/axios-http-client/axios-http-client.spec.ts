import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import { faker } from '@faker-js/faker'
import { HttpPostParams } from '../../../data/protocols/http/http-post-client'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedAxiosResult = {
  data: faker.helpers.objectKey({ name: 'name' }),
  status: faker.random.numeric()
}
mockedAxios.post.mockResolvedValue(mockedAxiosResult)

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.helpers.objectKey({ name: 'name' })
})

describe('AxiosHttpClient', () => {
  test('Shoukd call axios with correct values', async () => {
    const request = mockPostRequest()
    const sut = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('Should return the correct status code and body', async () => {
    const sut = makeSut()
    const httpResponse = await sut.post(mockPostRequest())
    expect(httpResponse).toEqual({ statusCode: mockedAxiosResult.status, body: mockedAxiosResult.data })
  })
})
