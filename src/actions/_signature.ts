import { ModerationClientOptions } from '../client'
import { hmac } from './_hmac'

export const signature =
  (options: ModerationClientOptions) =>
  (body: string): string => {
    console.log(`doing hmac with ${options.apiSecret} and ${body}`)
    return `hmac ${options.apiKey}:${hmac(options)(body)}`
  }
