import axios from 'axios'

export const RESOURCE_ENDPOINT = {
  ALL_FILES: '/secret/files',
  FILE: '/secret/file'
}

class FileServiceClient {
  baseUrl
  token
  client

  constructor () {
    this.baseUrl = process.env.EXTERNAL_ECHO_API_URL
    this.token = process.env.EXTERNAL_ECHO_API_TOKEN
    this.client = axios.create({
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    })
  }

  request (endpoint) {
    return this.client.get(`${this.baseUrl}${endpoint}`)
  }

  download (endpoint) {
    return this.client.get(`${this.baseUrl}${endpoint}`, {
      timeout: 100,
      headers: {
        accept: 'application/json',
        responseType: 'stream'
      }
    })
  }
}

export default FileServiceClient
