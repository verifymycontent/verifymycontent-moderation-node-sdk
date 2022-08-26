import {
  CreateComplaintModerationRequest,
  CreateComplaintModerationResponse,
} from '../models'
import { ModerationClientOptions } from '../client'
import { request } from './_request'
import { normalizeComplaintResponse } from '../normalizers'

export const CreateComplaintModerationAction =
  (options: ModerationClientOptions) =>
  async (
    data: CreateComplaintModerationRequest
  ): Promise<CreateComplaintModerationResponse> => {
    const response = await request(options)({
      method: 'POST',
      uri: '/api/v2/complaint-moderation',
      signed: true,
      body: {
        ...data,
      },
    })

    if (response.status !== 201) {
      throw new Error(`Unexpected status code: ${response.status}`)
    }

    return normalizeComplaintResponse<CreateComplaintModerationResponse>(
      response.data
    )
  }
