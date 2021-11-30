import { Router } from 'express'

import { cardRoutes } from './CardRoutes'
import { rechargeRoutes } from './RechargeRoutes'
import { tariffRoutes } from './TariffRoutes'
import { userRoutes } from './UserRoutes'

const routes = Router()

routes.use(userRoutes)
routes.use(tariffRoutes)
routes.use(cardRoutes)
routes.use(rechargeRoutes)

export { routes }
