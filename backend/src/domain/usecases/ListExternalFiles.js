import FileRepository from '../repositories/FileRepository'
import FileService from '../services/FileService'

class ListExternalFiles {
  static async execute () {
    const repository = new FileRepository(new FileService())

    return await repository.getFiles()
  }
}

export default ListExternalFiles
