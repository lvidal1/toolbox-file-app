import FileRepository from '../repositories/FileRepository'
import FileService from '../services/FileService'
import DownloadFile from './DownloadFile'

class GetFile {
  static async execute (filename, fresh = false) {
    const repository = new FileRepository(new FileService())

    try {
      await DownloadFile.execute(filename, fresh)

      return await repository.readInternalFile(filename)
    } catch (error) {
      return repository.mockFile(filename)
    }
  }
}

export default GetFile
