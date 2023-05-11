import FileRepository from '../repositories/FileRepository'
import FileService from '../services/FileService'
import GetFile from './GetFile'

class GetFiles {
  static async execute () {
    const repository = new FileRepository(new FileService())

    const { files } = await repository.getFiles()

    const response = []

    for (let i = 0; i < files.length; i++) {
      response.push(await GetFile.execute(files[i]))
    }

    return response
  }
}

export default GetFiles
