import { HmacSHA256 } from 'crypto-js'
import { ModerationClientOptions } from '../client'

export const hmac =
  (options: ModerationClientOptions) =>
  (body: string): string => {
    return HmacSHA256(body, options.apiSecret).toString()
  }

export { AES } from 'crypto-js'
