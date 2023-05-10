import FileRepository from '../repositories/FileRepository'

class GetFiles {
  static async execute () {
    const files = await FileRepository.getAll()
    return files
  }
}

export default GetFiles
