import { ModerationClientOptions } from '../client'
import { CreateLivestreamRequest, LivestreamModel } from '../models'
import { request } from './_request'
import { normalizeLivestream } from '../normalizers'

export const CreateLivestreamAction =
  (options: ModerationClientOptions) =>
  async ({
    content,
    ...body
  }: CreateLivestreamRequest): Promise<LivestreamModel> => {
    const response = await request(options)({
      method: 'POST',
      uri: `/api/v1/livestream`,
      signed: true,
      body: {
        ...body,
        external_id: content.id,
        embed_url: content.embed_url,
        title: content.title,
        description: content.description,
        stream: content.stream,
      },
    })

    if (response.status !== 201) {
      throw new Error(`Unexpected status code: ${response.status}`)
    }

    return normalizeLivestream(response.data)
  }
