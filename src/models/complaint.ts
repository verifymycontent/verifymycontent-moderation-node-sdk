import { ContentType } from './content'
import { Customer } from './customer'

export type ComplaintStatus =
  | 'waiting'
  | 'awaiting-moderation'
  | 'confirmed'
  | 'rejected'
  | 'failed'

export type CreateComplaintConsentRequest = {
  content: {
    external_id: string
  }
  customer: {
    id: string
  }
  webhook: string
}

export type CreateComplaintConsentResponse = {
  id: string
  status: ComplaintStatus
  redirect_url: string
}

export type CreateComplaintLivestreamRequest = {
  complained_at: Date
  customer: {
    id: Customer['id']
  }
  stream: {
    external_id: string
    tags: string[]
  }
  webhook: string
}

export type CreateComplaintLivestreamResponse = {
  id: string
  external_id: string
  notes: string
  status: ComplaintStatus
  tags: string[]
  created_at: Date
  updated_at: Date
}

export type CreateComplaintModerationRequest = Pick<
  CreateComplaintLivestreamRequest,
  'customer' | 'webhook'
> & {
  content: {
    title?: string
    description?: string
    external_id: string
    tags: string[]
    type: ContentType
    url: string
  }
}

export type CreateComplaintModerationResponse =
  CreateComplaintLivestreamResponse
