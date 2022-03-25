import { ModerationModel, ModerationStatus } from '../models'

export const normalizeModerationStatus = (status: string): ModerationStatus => {
  return status.toLowerCase().replace(' ', '-') as ModerationStatus
}

export const normalizeModeration = (data: any): ModerationModel => {
  return {
    ...data,
    status: normalizeModerationStatus(data.status),
  }
}
