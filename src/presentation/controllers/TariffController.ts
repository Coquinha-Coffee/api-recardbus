import { Request, Response } from 'express'

export class TariffController {
    public async index(request: Request, response: Response) {
        return response.json({ message: 'GET Tariff' })
    }

    public async create(request: Request, response: Response) {
        return response.json({ message: 'POST Tariff' })
    }
}
