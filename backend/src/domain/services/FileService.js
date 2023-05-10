import FileServiceClient, { RESOURCE_ENDPOINT } from '../../infrastructure/FileServiceClient'

class FileService {
  client

  constructor () {
    this.client = new FileServiceClient()
  }

  async getFiles () {
    try {
      const response = await this.client.request(RESOURCE_ENDPOINT.ALL_FILES)

      return await response.json()
    } catch (err) {
      throw new Error(err.message)
    }
  }

  async getFile (fileName) {
    try {
      const response = await this.client.download(RESOURCE_ENDPOINT.FILE + '/' + fileName)
      return response
    } catch (err) {
      throw new Error(err.message)
    }
  }
}

export default FileService
