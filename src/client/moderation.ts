import { CreateModerationAction, GetModerationAction } from '../actions'
import { CreateModerationRequest, ModerationModel } from '../models'
import { DEFAULT_MODERATION_URL } from '../utils'

export type ModerationClientOptions = {
  url?: string
  apiKey: string
  apiSecret: string
}

export interface IModerationClient {
  getModeration(id: ModerationModel['id']): Promise<ModerationModel>
  createModeration(request: CreateModerationRequest): Promise<ModerationModel>
}

class defaultModerationClient implements IModerationClient {
  constructor(private readonly options: ModerationClientOptions) {
    this.options = {
      url: DEFAULT_MODERATION_URL,
      ...this.options,
    }
  }

  getModeration = GetModerationAction(this.options)
  createModeration = CreateModerationAction(this.options)
}

export const ModerationClient = defaultModerationClient
