import FileRepository from '../repositories/FileRepository'
import FileService from '../services/FileService'
import GetFile from './GetFile'

class GetFiles {
  static async execute () {
    const repository = new FileRepository(new FileService())

    const { files } = await repository.getFiles()

    return await Promise.all(
      files.map(async (file) => {
        return await GetFile.execute(file)
      })
    )
  }
}

export default GetFiles
