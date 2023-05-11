import FileRepository from '../repositories/FileRepository'
import FileService from '../services/FileService'

class DownloadFile {
  static async execute (filename) {
    const repository = new FileRepository(new FileService())

    let filePath = await repository.getInternalFile(filename)

    if (!filePath) {
      filePath = await repository.downloadExternalFile(filename)
    }

    return filePath
  }
}

export default DownloadFile
