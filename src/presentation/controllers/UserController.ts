import { Request, Response } from 'express'

import { SaveUserCommand } from '../../application/command/SaveUserCommand'
import { FirestoreUserRepository } from '../../infrastructure/persistence/firestore/repositories/FirestoreUserRepository'

export class UserController {
    public async auth(request: Request, response: Response) {
        const firestoreUserRepository = new FirestoreUserRepository()
        const command = new SaveUserCommand(firestoreUserRepository)

        const user = await command.execute(
            'marcosmacedoo.dev@gmail.com',
            '123456'
        )

        return response.json(user)
    }

    public async create(request: Request, response: Response) {
        return response.json({ message: 'POST users' })
    }
}
