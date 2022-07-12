import { Content } from './content'
import { Customer } from './customer'
import { CreateModerationRequest } from './moderation'

export type LivestreamStatus =
  | 'waiting'
  | 'denied'
  | 'authorised'
  | 'capture-requested'
  | 'started'
  | 'failed'
  | 'stop-requested'
  | 'stopped-with-flag'
  | 'finished'
  | 'halted'
  | 'halted-delayed'

export type LivestreamModel = {
  id: string
  redirect_url: string
  external_id: string
  status: LivestreamStatus
  notes: string
  tags: string[]
  created_at: string
  updated_at: string
}

export type LivestreamProtocol = 'rtmps' | 'rtmp' | 'hls' | 'webrtc'

export type LivestreamStream = {
  protocol: LivestreamProtocol
  url: string
}

export type LivestreamContent = Pick<
  Content,
  'external_id' | 'title' | 'description'
> & {
  stream: LivestreamStream
  embed_url: string
}

export type CreateLivestreamRequest = Pick<
  CreateModerationRequest,
  'customer' | 'webhook'
> & {
  content: Omit<LivestreamContent, 'external_id'> & {
    id: LivestreamContent['external_id']
  }
}
