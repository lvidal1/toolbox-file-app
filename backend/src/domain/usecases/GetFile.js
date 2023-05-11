import FileRepository from '../repositories/FileRepository'
import FileService from '../services/FileService'

class GetFile {
  static async execute (filename) {
    const repository = new FileRepository(new FileService())

    const exists = await repository.getInternalFile(filename)

    if (!exists) {
      await repository.downloadExternalFile(filename)
    }

    return await repository.readInternalFile(filename);

  }
}

export default GetFile
