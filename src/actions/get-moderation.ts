import { ModerationClient } from '../client'
import { ModerationModel } from '../models'
import { request } from './_request'

export const GetModerationAction =
  (client: ModerationClient) =>
  async (id: ModerationModel['id']): Promise<ModerationModel> => {
    const response = await request(client)({
      method: 'GET',
      uri: `/api/v1/moderation/${id}`,
      signed: true,
    })

    if (response.status !== 200) {
      throw new Error(`Unexpected status code: ${response.status}`)
    }

    return response.data
  }
