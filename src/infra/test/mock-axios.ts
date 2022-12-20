
import axios from 'axios'
import { faker } from '@faker-js/faker'

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.post.mockResolvedValue(mockHttpResponse())
  return mockedAxios
}

export const mockHttpResponse = (): any => ({
  data: faker.helpers.objectKey({ name: 'name' }),
  status: faker.datatype.number({ min: 200, max: 600 })
})
