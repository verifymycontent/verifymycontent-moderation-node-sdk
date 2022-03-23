import { HmacSHA256 } from 'crypto-js'
import { ModerationClient } from '../client'

export const hmac =
  (client: ModerationClient) =>
  (body: string): string => {
    return HmacSHA256(body, client.getOptions().apiSecret).toString()
  }
