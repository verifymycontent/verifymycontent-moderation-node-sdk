import { Complaint } from './../models/complaint'
import {
  CreateLivestreamAction,
  CreateAnonymousLivestreamAction,
  CreateModerationAction,
  GetLivestreamAction,
  GetModerationAction,
  StartLivestreamAction,
  CreateComplaintAction,
  GetComplaintAction,
} from '../actions'
import {
  CreateComplaintRequest,
  CreateComplaintResponse,
  CreateLivestreamRequest,
  CreateModerationRequest,
  LivestreamModel,
  ModerationModel,
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
  createComplaint(
    request: CreateComplaintRequest
  ): Promise<CreateComplaintResponse>
  getComplaint(id: Complaint['id']): Promise<Complaint>
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
  createComplaint = CreateComplaintAction(this.options)
  getComplaint = GetComplaintAction(this.options)
}

export const ModerationClient = defaultModerationClient
