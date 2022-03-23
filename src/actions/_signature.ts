import { ModerationClient } from 'client'
import { HmacSHA256 } from 'crypto-js'

export const signature = (client: ModerationClient) => (body: any): string => {
  return HmacSHA256(
    JSON.stringify(body),
    client.getOptions().apiSecret
  ).toString()
}
