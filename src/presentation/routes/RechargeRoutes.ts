import { Router } from 'express'
import { RechargeController } from '../controllers/RechargeController'

const rechargeRoutes = Router()
const rechargeController = new RechargeController()

rechargeRoutes.post('/recharges', rechargeController.create)

rechargeRoutes.get('/recharges/:idCard', rechargeController.index)

export { rechargeRoutes }
