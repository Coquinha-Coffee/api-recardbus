import { Request, Response } from 'express'
import { SaveCardCommand } from '../../application/command/SaveCardCommand'
import { CardEntity } from '../../domain/entities/CardEntity'
import { FirestoreCardRepository } from '../../infrastructure/persistence/firestore/repositories/FirestoreCardRespository'

export class CardController {
    public async index(request: Request, response: Response) {
        return response.json({ message: 'GET cards' })
    }

    public async create(request: Request, response: Response) {
        const card = request.body as CardEntity
        let statusCode = 201
        let responseDatabase: { status?: string; data?: CardEntity | {} } = {}

        try {
            const firestoreCardRepository = new FirestoreCardRepository()
            const saveCardCommand = new SaveCardCommand(firestoreCardRepository)

            responseDatabase = await saveCardCommand.execute(card)

            if (responseDatabase?.status === 'error') statusCode = 400
        } catch {
            console.error('Erro: Ao salvar cartao no banco de dados')
            statusCode = 400
        }

        return response.status(statusCode).json(responseDatabase)
    }
}
