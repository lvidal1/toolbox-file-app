import fs from 'fs'
import { getTempFilepath } from '../../paths'

class FileRepository {
  service

  constructor (thirdPartyService) {
    this.service = thirdPartyService
  }

  async getFiles () {
    const files = await this.service.getFiles()
    return files
  }

  async getInternalFile (name) {
    try {
      const filePath = getTempFilepath(name)
      if (fs.existsSync(filePath)) {
        return filePath
      } else {
        return null
      }
    } catch (err) {
      console.error(err)
    }
  }

  async downloadExternalFile (name) {
    try {
      const response = await this.service.getFile(name)
      const filePath = getTempFilepath(name)
      fs.writeFileSync(filePath, response.data)
      console.log('Image saved successfully!')

      return filePath
    } catch (err) {
      console.error(err)
      throw new Error('Impossible to write local file')
    }
  }
}

export default FileRepository
