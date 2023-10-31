import request from './request'

const path = {
  imageDownLoad: '/displayImage/1',
  imageList: '/getImage',
  deleteImageServer: '/image/deleteImageServer',
  deleteImageDatabase: '/image/deleteImageDB',
  uploadImage: '/image/mutiUpload',
}
export const getImageDownLoadUrl = async () => {
  return await request.get(path.imageDownLoad)
}
//
export const getImageList = async (page: number, type: number) => {
  const size = 40
  const res = await request.get(
    `${path.imageList}?start=${page}&end=${size}&projectType=${type}`,
  )
  return res
}

export const getDeleteImage = async (id: number, imageUrl: string) => {
  const deleteImageServerDataRes = request.get(
    `${path.deleteImageServer}?imageUrl=${imageUrl}`,
  )
  const deleteDatabaseRes = request.get(
    `${path.deleteImageDatabase}?imageId=${id}`,
  )
  const res = await Promise.all([deleteDatabaseRes, deleteImageServerDataRes])
  return res
}

export const uploadImage = async (payload: any) => {
  const res = await request.post(path.uploadImage, payload, {
    headers: {
      'content-type': 'multidata/formdata',
    },
  })
  console.log(res)
}
