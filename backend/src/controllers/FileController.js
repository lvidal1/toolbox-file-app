import DownloadFile from '../domain/usecases/DownloadFile'
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

  async downloadFile (req, res) {
    const { filename } = req.params
    console.log(filename)
    try {
      const file = await DownloadFile.execute(filename)
      res.download(file);
    } catch (err) {
      res.statusMessage = err
      return res.status(401).end()
    }
  }
}

export default FileController
