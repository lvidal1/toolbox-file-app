import { Router } from 'express'
import FileController from '../controllers/FileController'

const router = Router()
const fileController = new FileController()

router.get('/', fileController.getFiles.bind(fileController))

export default router
