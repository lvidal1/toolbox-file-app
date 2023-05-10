export const RESOURCE_ENDPOINT = {
  ALL_FILES: '/secret/files',
  FILE: '/secret/file'
}

class FileServiceClient {
  baseUrl
  token

  constructor () {
    this.baseUrl = process.env.EXTERNAL_ECHO_API_URL
    this.token = process.env.EXTERNAL_ECHO_API_TOKEN
  }

  request (endpoint) {
    return fetch(this.baseUrl + endpoint, {
      headers: { authorization: 'Bearer s' + this.token }
    })
  }
}

export default FileServiceClient
