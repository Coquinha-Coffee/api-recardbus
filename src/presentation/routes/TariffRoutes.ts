import { Router } from 'express'
import { TariffController } from '../controllers/TariffController'

const tariffRoutes = Router()
const tariffController = new TariffController()

tariffRoutes.post('/tariffs', tariffController.create)

tariffRoutes.get('/tariffs/:typeCard', tariffController.index)

export { tariffRoutes }
