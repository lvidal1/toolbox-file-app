import DownloadFile from '../domain/usecases/DownloadFile'
import GetFile from '../domain/usecases/GetFile'
import GetFiles from '../domain/usecases/GetFiles'
import ListExternalFiles from '../domain/usecases/ListExternalFiles'

class FileController {
  async getFiles (req, res) {
    const { fileName, fresh } = req.query
    try {
      const files = await GetFiles.execute(fileName, fresh)
      res.json(files)
    } catch (err) {
      res.statusMessage = err
      return res.status(401).end()
    }
  }

  async getFile (req, res) {
    const { filename } = req.params
    try {
      const rows = await GetFile.execute(filename)
      res.json(rows)
    } catch (err) {
      res.statusMessage = err
      return res.status(401).end()
    }
  }

  async downloadFile (req, res) {
    const { filename } = req.params
    const { fresh } = req.query

    try {
      const file = await DownloadFile.execute(filename, fresh)
      res.download(file)
    } catch (err) {
      res.statusMessage = err
      return res.status(401).end()
    }
  }

  async listExternalFiles (req, res) {
    try {
      const files = await ListExternalFiles.execute()
      res.json(files)
    } catch (err) {
      res.statusMessage = err
      return res.status(401).end()
    }
  }

  async health (req, res) {
    return res.status(200).end()
  }
}

export default FileController
