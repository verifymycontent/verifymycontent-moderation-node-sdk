import { ModerationClientOptions } from '../client'
import { hmac } from './_hmac'

export const signature =
  (options: ModerationClientOptions) =>
  (body: string): string => {
    return `hmac ${options.apiKey}:${hmac(options)(body)}`
  }
