import { Complaint, ComplaintStatus } from '../models'

export const normalizeComplaint = (data: any): Complaint =>
  ({
    ...data,
    status: normalizeComplaintStatus(data.status),
  } as Complaint)

export const normalizeComplaintStatus = (status: string): ComplaintStatus => {
  return status.toLowerCase().replace(' ', '-') as ComplaintStatus
}
