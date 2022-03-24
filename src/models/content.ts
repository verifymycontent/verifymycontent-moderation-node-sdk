export type ContentType = 'video' | 'image' | 'text'

export type Content = {
  external_id?: string
  title?: string
  description?: string
  type: ContentType
  url: string
}
