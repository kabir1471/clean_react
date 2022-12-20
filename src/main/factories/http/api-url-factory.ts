const API_URL = 'http://fordevs.herokuapp.com/api'
export const makeApiUrl = (path: string): string => {
  return `${API_URL}${path}`
}
