export type ImageListPayload = {
  page: number
  type: number
}

export type ImageListRecord = {
  id: number
  imageUrl: string
  type: string
  createTime: string
  isBlock: number
  projectType: number
  display: number
}

export type ImageUploadPayload = {}
