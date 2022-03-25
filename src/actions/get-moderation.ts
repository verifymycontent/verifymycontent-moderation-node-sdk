import { ModerationClientOptions } from '../client'
import { ModerationModel } from '../models'
import { normalizeModeration } from '../normalizers'
import { request } from './_request'

export const GetModerationAction =
  (options: ModerationClientOptions) =>
  async (id: ModerationModel['id']): Promise<ModerationModel> => {
    const response = await request(options)({
      method: 'GET',
      uri: `/api/v1/moderation/${id}`,
      signed: true,
    })

    if (response.status !== 200) {
      throw new Error(`Unexpected status code: ${response.status}`)
    }

    return normalizeModeration(response.data)
  }
