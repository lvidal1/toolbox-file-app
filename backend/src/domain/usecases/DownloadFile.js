import FileRepository from '../repositories/FileRepository'
import FileService from '../services/FileService'

class DownloadFile {
  static async execute (filename) {
    const repository = new FileRepository(new FileService())

    const stream = await repository.downloadExternalFile(filename)
    return stream
  }
}

export default DownloadFile
