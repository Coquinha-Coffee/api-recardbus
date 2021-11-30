import { Request, Response } from 'express'

export class CardController {
    public async index(request: Request, response: Response) {
        return response.json({ message: 'GET cards' })
    }

    public async create(request: Request, response: Response) {
        return response.json({ message: 'POST cards' })
    }
}
