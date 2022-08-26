import {
  CreateComplaintConsentRequest,
  CreateComplaintConsentResponse,
} from '../models'
import { ModerationClientOptions } from '../client'
import { request } from './_request'
import { normalizeComplaintResponse } from '../normalizers'

export const CreateComplaintConsentAction =
  (options: ModerationClientOptions) =>
  async (
    data: CreateComplaintConsentRequest
  ): Promise<CreateComplaintConsentResponse> => {
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

    return normalizeComplaintResponse<CreateComplaintConsentResponse>(
      response.data
    )
  }
