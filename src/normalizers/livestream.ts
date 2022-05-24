import {LivestreamModel, LivestreamStatus} from '../models'

export const normalizeLivestreamStatus = (status: string): LivestreamStatus => {
  return status.toLowerCase().replace(' ', '-') as LivestreamStatus
}

export const normalizeLivestream = (data: any): LivestreamModel => {
  return {
    ...data,
    status: normalizeLivestreamStatus(data.status),
  }
}
