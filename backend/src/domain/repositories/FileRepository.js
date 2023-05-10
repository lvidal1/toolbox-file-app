const fs = require('fs')
const path = require('path')

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
    const response = await this.service.getFile(name)

    const filePath = path.join(__dirname, '..', '..', '..', 'tmp', name)

    const writer = fs.createWriteStream(filePath)
    response.data.pipe(writer)

    await new Promise((resolve, reject) => {
      writer.on('finish', resolve)
      writer.on('error', reject)
    })

    console.log('Image saved successfully!')
  }
}

export default FileRepository
