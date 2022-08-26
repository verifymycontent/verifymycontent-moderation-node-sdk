import { ModerationClientOptions } from '../client'
import { CreateLivestreamRequest, LivestreamModel } from '../models'
import { request } from './_request'
import { normalizeLivestream } from '../normalizers'

export const StartLivestreamAction =
  (options: ModerationClientOptions) =>
  async (id: LivestreamModel['id']): Promise<void> => {
    const response = await request(options)({
      method: 'PATCH',
      uri: `/api/v1/livestream/${id}/start`,
      signed: true,
    })

    if (response.status !== 204) {
      throw new Error(`Unexpected status code: ${response.status}`)
    }

    return
  }
