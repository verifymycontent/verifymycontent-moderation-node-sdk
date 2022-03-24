import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { ModerationClient, ModerationClientOptions } from '../client'
import { signature } from './_signature'

type RequestOptions = {
  uri: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  signed?: boolean
  body?: any
}

let _moderationHttp: AxiosInstance
const ModerationHttp = (options: ModerationClientOptions): AxiosInstance => {
  if (!_moderationHttp) {
    _moderationHttp = axios.create({
      baseURL: options.url,
    })
  }

  return _moderationHttp
}

export const request =
  (options: ModerationClientOptions) =>
  (request: RequestOptions): Promise<AxiosResponse> => {
    const { uri, method, signed, body } = request
    const sign = signed && signature(options)
    const content = body ? JSON.stringify(body) : undefined

    return ModerationHttp(options).request({
      url: uri,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        ...(signed
          ? {
              Authorization: sign(method === 'GET' ? uri : content),
            }
          : {}),
      },
      data: content,
    })
  }
