import { DEFAULT_MODERATION_URL } from 'utils'

export type ModerationClientOptions = {
  url?: string
  apiKey: string
  apiSecret: string
}

export interface ModerationClient {
  getOptions(): ModerationClientOptions
}

class defaultModerationClient implements ModerationClient {
  private readonly options: ModerationClientOptions
  constructor(options: ModerationClientOptions) {
    this.options = { url: DEFAULT_MODERATION_URL, ...options }
  }

  getOptions = () => this.options
}

export const NewModerationClient = (options: ModerationClientOptions) => {
  return new defaultModerationClient(options)
}
