import { RemoteAuthentication } from '../../../../data/usecases/authentication/remote-authentication'
import { Authentication } from '../../../../domain/usecases/authentication'
import { makeApiUrl } from '../../http/api-url-factory'
import { makeAxiosHttpClient } from '../../http/axios-httlp-client-factory'

export const makeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(makeApiUrl('/login'), makeAxiosHttpClient())
}
