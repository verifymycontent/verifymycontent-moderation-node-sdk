export type ComplaintStatus = 'waiting' | 'denied' | 'authorised' | 'finished'

export type Complaint = {
  id: string
  status: ComplaintStatus
}

export type CreateComplaintRequest = {
  content: {
    external_id: string
  }
  customer?: {
    id?: string
  }
  webhook: string
}

export type CreateComplaintResponse = Complaint & {
  redirect_url: string
}
