import { Request, Response } from 'express'

export class RechargeController {
    public async index(request: Request, response: Response) {
        return response.json({ message: 'GET recharges' })
    }

    public async create(request: Request, response: Response) {
        return response.json({ message: 'POST recharges' })
    }
}
