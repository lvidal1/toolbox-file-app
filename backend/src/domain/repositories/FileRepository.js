import fs from 'fs'
import { getTempFilepath } from '../../paths'
import File from '../models/File'

class FileRepository {
  service

  constructor (thirdPartyService) {
    this.service = thirdPartyService
  }

  async getFiles () {
    const files = await this.service.getFiles()
    return files
  }

  async getInternalFile (name) {
    try {
      const filePath = getTempFilepath(name)
      if (fs.existsSync(filePath)) {
        return filePath
      } else {
        return null
      }
    } catch (err) {
      console.error(err)
    }
  }

  async readInternalFile (name) {
    try {
      const filePath = getTempFilepath(name)
      const csvData = fs.readFileSync(filePath, 'utf8');

      const lines = csvData.split('\n');
      const headers = lines[0].split(',');
      const data = lines.slice(1).map((line) => {
        const values = line.split(',');
        const obj = {};
        for (let i = 0; i < headers.length; i++) {
          obj[headers[i]] = values[i] || null;
        }
        return obj;
      });

      return (new File(name, data)).formatToJson();

    } catch (err) {
      console.log(err);
    }

  }

  async downloadExternalFile (name) {
    try {
      const response = await this.service.getFile(name)
      const filePath = getTempFilepath(name)
      fs.writeFileSync(filePath, response.data)
      console.log('Image saved successfully!')

      return filePath
    } catch (err) {
      console.error(err)
      throw new Error('Impossible to write local file')
    }
  }
}

export default FileRepository
