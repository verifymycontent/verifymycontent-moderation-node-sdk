import { ModerationClient } from '../client'
import { hmac } from './_hmac'

export const signature =
  (client: ModerationClient) =>
  (body: string): string => {
    return `hmac ${client.getOptions().apiKey}:${hmac(client)(body)}`
  }
