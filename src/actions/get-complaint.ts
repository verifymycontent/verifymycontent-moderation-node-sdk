import { Complaint } from './../models'
import { ModerationClientOptions } from '../client'
import { request } from './_request'
import { normalizeComplaint } from '../normalizers'

export const GetComplaintAction =
  (options: ModerationClientOptions) =>
  async (id: Complaint['id']): Promise<Complaint> => {
    const response = await request(options)({
      method: 'GET',
      uri: `/api/v2/complaint-consent/${id}`,
      signed: true,
    })

    if (response.status !== 200) {
      throw new Error(`Unexpected status code: ${response.status}`)
    }

    return normalizeComplaint(response.data)
  }
