import { Router } from 'express'
import MainController from '../controllers/MainController'

const router = Router()
const mainController = new MainController()

router.get('/', mainController.home.bind(mainController))
router.get('/health', mainController.health.bind(mainController))

export default router
