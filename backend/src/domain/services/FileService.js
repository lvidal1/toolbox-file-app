import FileServiceClient, { RESOURCE_ENDPOINT } from '../../infrastructure/FileServiceClient'

class FileService {
  client
  static instance

  constructor () {
    this.client = new FileServiceClient()
  }

  static getInstance () {
    if (!FileService.instance) {
      FileService.instance = new FileService()
    }
    return FileService.instance
  }

  static getClient () {
    return FileService.getInstance().client
  }

  static async getFiles () {
    try {
      const response = await this.getClient().request(RESOURCE_ENDPOINT.ALL_FILES)
      if (!response.ok) { throw new Error(response.statusText) }

      return await response.json()
    } catch (err) {
      console.log(err)
    }
  }
}

export default FileService
