import { Content } from './content'
import { Customer } from './customer'

export type ModerationModel = {
  id: string
  redirect_url: string
  external_id: string
  status: string
  notes: string
  tags: string[]
  created_at: string
  updated_at: string
}

export type CreateModerationRequest = {
  content: Omit<Content, 'external_id'> & { id: Content['external_id'] }
  customer: Customer
  webhook: string
}
