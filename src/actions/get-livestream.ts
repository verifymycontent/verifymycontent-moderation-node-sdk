import { ModerationClientOptions } from '../client'
import { CreateLivestreamRequest, LivestreamModel } from '../models'
import { request } from './_request'
import { normalizeLivestream } from '../normalizers'

export const GetLivestreamAction =
  (options: ModerationClientOptions) =>
  async (id: LivestreamModel['id']): Promise<LivestreamModel> => {
    const response = await request(options)({
      method: 'GET',
      uri: `/api/v1/livestream/${id}`,
      signed: true,
    })

    if (response.status !== 200) {
      throw new Error(`Unexpected status code: ${response.status}`)
    }

    return normalizeLivestream(response.data)
  }
