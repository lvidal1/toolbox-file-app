import FileRepository from '../repositories/FileRepository'
import FileService from '../services/FileService'

class DownloadFile {
  static async execute (filename, fresh = false) {
    const repository = new FileRepository(new FileService())

    let filePath = await repository.getInternalFile(filename)

    if (!filePath || fresh) {
      filePath = await repository.downloadExternalFile(filename)
    }

    return filePath
  }
}

export default DownloadFile
