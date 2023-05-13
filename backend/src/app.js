import express from 'express'
import cors from 'cors'
import main from './routes/main'
import files from './routes/files'

class App {
  app
  port

  constructor (port) {
    this.app = express()
    this.port = port || 3000

    this.middleware()
    this.routes()
  }

  middleware () {
    this.app.use(express.json())
    this.app.use(cors())
  }

  routes () {
    this.app.use('/', main)
    this.app.use('/files', files)
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(
        `⚡️[server]: Server is running at http://localhost:${this.port}`
      )
    })
  }

  getInstance () {
    return this.app
  }
}

export default App
