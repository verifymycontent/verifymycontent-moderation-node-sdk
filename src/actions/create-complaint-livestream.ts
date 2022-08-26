import {
  CreateComplaintLivestreamRequest,
  CreateComplaintLivestreamResponse,
} from '../models'
import { ModerationClientOptions } from '../client'
import { request } from './_request'
import { normalizeComplaintResponse } from '../normalizers'

export const CreateComplaintLivestreamAction =
  (options: ModerationClientOptions) =>
  async (
    data: CreateComplaintLivestreamRequest
  ): Promise<CreateComplaintLivestreamResponse> => {
    const response = await request(options)({
      method: 'POST',
      uri: '/api/v2/complaint-livestream',
      signed: true,
      body: {
        ...data,
      },
    })

    if (response.status !== 201) {
      throw new Error(`Unexpected status code: ${response.status}`)
    }

    return normalizeComplaintResponse<CreateComplaintLivestreamResponse>(
      response.data
    )
  }
