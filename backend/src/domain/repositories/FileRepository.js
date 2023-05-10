import FileService from '../services/FileService'

class FileRepository {
  static async getAll () {
    const files = await FileService.getFiles()
    // perform any necessary transformations or validations on the data
    return files
  }

  static async getByName (name) {
    // retrieve the file with the specified name from the database or file system
    // and return it as an object or null if not found
  }
}

export default FileRepository
