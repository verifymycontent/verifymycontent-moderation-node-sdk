import { ModerationClient } from 'client'
import { signature } from './_signature'

type RequestOptions = {
  url: string
  method: string
  withSignature?: boolean
  body?: any
}

export const request =
  (client: ModerationClient) => (options: RequestOptions) => {
    return fetch(`${client.getOptions().url}${options.url}`, {
      method: options.method,
      headers: {
        'Content-Type': 'application/json',
        ...(options.withSignature
          ? {
              Authorization: `hmac ${client.getOptions().apiKey}:${signature(
                options.body
              )}`,
            }
          : {}),
      },
      body: options.body,
    })
  }
