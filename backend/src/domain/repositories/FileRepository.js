// import FileService from '../services/FileService'

class FileRepository {
  service

  constructor (thirdPartyService) {
    this.service = thirdPartyService
  }

  async getFiles () {
    const files = await this.service.getFiles()
    return files
  }

  async getByName (name) {
    // retrieve the file with the specified name from the database or file system
    // and return it as an object or null if not found
  }
}

export default FileRepository
