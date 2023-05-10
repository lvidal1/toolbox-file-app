import GetFiles from '../domain/usecases/GetFiles'

class FileController {
  async getFiles (req, res, next) {
    try {
      const files = await GetFiles.execute()
      res.json(files)
    } catch (err) {
      next(err)
    }
  }
}

export default FileController
