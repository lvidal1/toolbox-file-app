import GetFiles from '../domain/usecases/GetFiles'

class FileController {
  async getFiles (req, res) {
    try {
      const files = await GetFiles.execute()
      res.json(files)
    } catch (err) {
      res.statusMessage = err
      return res.status(401).end()
    }
  }
}

export default FileController
