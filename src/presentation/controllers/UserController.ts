import { Request, Response } from 'express'

export class UserController {
    public async auth(request: Request, response: Response) {
        return response.json({ message: 'GET users' })
    }

    public async create(request: Request, response: Response) {
        return response.json({ message: 'POST users' })
    }
}
