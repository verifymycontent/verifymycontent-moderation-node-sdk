import { ComplaintStatus } from '../models'

export const normalizeComplaintResponse = <R>(data: any): R =>
  ({
    ...data,
    status: normalizeComplaintStatus(data.status),
  } as R)

export const normalizeComplaintStatus = (status: string): ComplaintStatus => {
  return status.toLowerCase().replace(' ', '-') as ComplaintStatus
}
