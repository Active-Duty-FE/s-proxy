import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { AxiosError } from 'axios'
import { catchError, firstValueFrom } from 'rxjs'
import {
  getDeleteImage,
  getImageDownLoadUrl,
  getImageList,
  uploadImage,
} from 'src/service/image-server'

@Injectable()
export class ImageServerService {
  constructor(private readonly httpService: HttpService) {}
  create(createImageDownloadDto) {
    return 'This action adds a new imageDownload'
  }

  async findAll(count: number) {
    return await getImageDownLoadUrl()
  }
  async findAllImageList(page: number, type: number) {
    return await getImageList(page, type)
  }

  async deleteImage(id: number, imageUrl: string) {
    return await getDeleteImage(id, imageUrl)
  }

  async uploadImage(payload: any) {
    return await uploadImage(payload)
  }
}
