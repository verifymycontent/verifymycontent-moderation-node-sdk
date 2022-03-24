import { ModerationClientOptions } from '../client'
import { CreateModerationRequest, ModerationModel } from '../models'
import { request } from './_request'

export const CreateModerationAction =
  (options: ModerationClientOptions) =>
  async (body: CreateModerationRequest): Promise<ModerationModel> => {
    const response = await request(options)({
      method: 'POST',
      uri: `/api/v1/moderation`,
      signed: true,
      body: body,
    })

    if (response.status !== 201) {
      throw new Error(`Unexpected status code: ${response.status}`)
    }

    return response.data
  }
