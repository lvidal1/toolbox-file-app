import FileRepository from '../repositories/FileRepository'
import FileService from '../services/FileService'
import GetFile from './GetFile'

class GetFiles {
  static async execute (filename = null, fresh = false) {
    const repository = new FileRepository(new FileService())

    const { files } = await repository.getFiles()

    return await Promise.all(
      files
        .filter(file => filename ? file === filename : true)
        .map(async (file) => {
          return await GetFile.execute(file, fresh)
        })
    )
  }
}

export default GetFiles
