import { Router } from 'express'
import FileController from '../controllers/FileController'

const router = Router()
const fileController = new FileController()

router.get('/', fileController.getFiles.bind(fileController))
router.get('/:filename', fileController.getFile.bind(fileController))
router.get('/download/:filename', fileController.downloadFile.bind(fileController))

export default router
