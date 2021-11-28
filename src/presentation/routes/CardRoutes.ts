import { Router } from 'express'

import { CardController } from '../controllers/CardController'

const cardRoutes = Router()
const cardController = new CardController()

cardRoutes.post('/cards', cardController.create)

cardRoutes.get('/cards/:idUser', cardController.index)

export { cardRoutes }
