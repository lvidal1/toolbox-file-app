import FileRepository from '../repositories/FileRepository'
import FileService from '../services/FileService'

class GetFiles {
  static async execute () {
    const repository = new FileRepository(new FileService())

    const files = await repository.getFiles()
    return files
  }
}

export default GetFiles
