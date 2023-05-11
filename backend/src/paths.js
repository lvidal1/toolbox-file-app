import path from 'path'

export const ROOT_PATH = path.join(__dirname, '..')

export const getTempFilepath = (filename) => {
  return path.join(ROOT_PATH, process.env.TEMP_FOLDER, filename)
}
