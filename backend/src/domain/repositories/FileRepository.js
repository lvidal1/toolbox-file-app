import fs from 'fs'
import path from 'path'

class FileRepository {
  service

  constructor (thirdPartyService) {
    this.service = thirdPartyService
  }

  async getFiles () {
    const files = await this.service.getFiles()
    return files
  }

  async downloadExternalFile (name) {
    try {
      const response = await this.service.getFile(name)
      const filePath = path.join(__dirname, '..', '..', '..', 'tmp', name)
      fs.writeFileSync(filePath, response.data)
      console.log('Image saved successfully!')
    } catch (err) {
      console.error(err)
      throw new Error('Impossible to write local file')
    }
  }
}

export default FileRepository
