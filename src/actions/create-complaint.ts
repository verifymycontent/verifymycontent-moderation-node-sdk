import { CreateComplaintRequest, CreateComplaintResponse } from './../models'
import { ModerationClientOptions } from '../client'
import { request } from './_request'
import { normalizeComplaint } from '../normalizers'

export const CreateComplaintAction =
  (options: ModerationClientOptions) =>
  async (data: CreateComplaintRequest): Promise<CreateComplaintResponse> => {
    const response = await request(options)({
      method: 'POST',
      uri: '/api/v2/complaint-consent',
      signed: true,
      body: {
        ...data,
      },
    })

    if (response.status !== 201) {
      throw new Error(`Unexpected status code: ${response.status}`)
    }

    return {
      ...normalizeComplaint(response.data),
      redirect_url: response.data.redirect_url,
    }
  }
