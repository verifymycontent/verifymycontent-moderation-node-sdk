import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { ModerationClient } from '../client'
import { signature } from './_signature'

type RequestOptions = {
  uri: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  signed?: boolean
  body?: any
}

let _moderationHttp: AxiosInstance
const ModerationHttp = (client: ModerationClient): AxiosInstance => {
  if (!_moderationHttp) {
    _moderationHttp = axios.create({
      baseURL: client.getOptions().url,
    })
  }

  return _moderationHttp
}

export const request =
  (client: ModerationClient) =>
  (options: RequestOptions): Promise<AxiosResponse> => {
    const { uri, method, signed, body } = options
    const sign = signed && signature(client)

    return ModerationHttp(client).request({
      url: uri,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        ...(signed
          ? {
              Authorization: sign(
                method === 'GET' ? uri : JSON.stringify(body)
              ),
            }
          : {}),
      },
      data: body ? JSON.stringify(body) : undefined,
    })
  }
