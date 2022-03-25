import { ModerationClientOptions } from '../client'
import { CreateModerationRequest, ModerationModel } from '../models'
import { normalizeModeration } from '../normalizers'
import { request } from './_request'

export const CreateModerationAction =
  (options: ModerationClientOptions) =>
  async ({
    content: { id: content_id, ...content },
    ...body
  }: CreateModerationRequest): Promise<ModerationModel> => {
    const response = await request(options)({
      method: 'POST',
      uri: `/api/v1/moderation`,
      signed: true,
      body: {
        ...body,
        content: {
          ...content,
          external_id: content_id,
        },
      },
    })

    if (response.status !== 201) {
      throw new Error(`Unexpected status code: ${response.status}`)
    }

    return normalizeModeration(response.data)
  }
