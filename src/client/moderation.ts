import {
  CreateLivestreamAction,
  CreateAnonymousLivestreamAction,
  CreateModerationAction,
  GetLivestreamAction,
  GetModerationAction,
  StartLivestreamAction,
  CreateComplaintConsentAction,
  CreateComplaintModerationAction,
  CreateComplaintLivestreamAction,
} from '../actions'
import {
  CreateComplaintConsentRequest,
  CreateComplaintConsentResponse,
  CreateLivestreamRequest,
  CreateModerationRequest,
  LivestreamModel,
  ModerationModel,
  CreateComplaintModerationRequest,
  CreateComplaintLivestreamRequest,
  CreateComplaintModerationResponse,
  CreateComplaintLivestreamResponse,
} from '../models'
import { DEFAULT_MODERATION_URL } from '../utils'

export type ModerationClientOptions = {
  url?: string
  apiKey: string
  apiSecret: string
}

export interface IModerationClient {
  getModeration(id: ModerationModel['id']): Promise<ModerationModel>
  createModeration(request: CreateModerationRequest): Promise<ModerationModel>
  createLivestream(request: CreateLivestreamRequest): Promise<LivestreamModel>
  createAnonymousLivestream(
    request: CreateLivestreamRequest
  ): Promise<LivestreamModel>
  getLivestream(id: LivestreamModel['id']): Promise<LivestreamModel>
  startLivestream(id: LivestreamModel['id']): Promise<void>
  createComplaintConsent(
    request: CreateComplaintConsentRequest
  ): Promise<CreateComplaintConsentResponse>
  createComplaintModeration(
    request: CreateComplaintModerationRequest
  ): Promise<CreateComplaintModerationResponse>
  createComplaintLivestream(
    request: CreateComplaintLivestreamRequest
  ): Promise<CreateComplaintLivestreamResponse>
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
  createLivestream = CreateLivestreamAction(this.options)
  createAnonymousLivestream = CreateAnonymousLivestreamAction(this.options)
  getLivestream = GetLivestreamAction(this.options)
  startLivestream = StartLivestreamAction(this.options)
  createComplaintConsent = CreateComplaintConsentAction(this.options)
  createComplaintModeration = CreateComplaintModerationAction(this.options)
  createComplaintLivestream = CreateComplaintLivestreamAction(this.options)
}

export const ModerationClient = defaultModerationClient
