import path from 'path'

export const ROOT_PATH = path.join(__dirname, '..', '..', '..')

export const TEMP_PATH = path.join(ROOT_PATH, process.env.TEMP_FOLDER)

export const getTempFilepath = (filename) => {
  return path.join(TEMP_PATH, filename)
}
