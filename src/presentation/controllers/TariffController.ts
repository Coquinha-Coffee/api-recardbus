import { Request, Response } from 'express'

import { SaveTariffCommand } from '../../application/command/SaveTariffCommand'
import { GetPerTypeCardTariffQuery } from '../../application/query/GetPerTypeCardTariffQuery'
import { FirestoreTariffRepository } from '../../infrastructure/persistence/firestore/repositories/FirestoreTariffRespository'
import { TariffEntity } from '../../domain/entities/TariffEntity'

export class TariffController {
    public async index(request: Request, response: Response) {
        const { typeCard } = request.params as { typeCard: string }

        const firestoreTariffRepository = new FirestoreTariffRepository()
        const getTariffAllPerTypeCard = new GetPerTypeCardTariffQuery(
            firestoreTariffRepository
        )

        const responseDatabase = await getTariffAllPerTypeCard.execute(typeCard)

        return response.json(responseDatabase)
    }

    public async create(request: Request, response: Response) {
        let statusCode = 201
        const tariffs = request.body as TariffEntity[]

        const firestoreTariffRepository = new FirestoreTariffRepository()
        const commandSaveTariffCommand = new SaveTariffCommand(
            firestoreTariffRepository
        )

        const responseDatabase = await commandSaveTariffCommand.execute(tariffs)

        if (responseDatabase.status === 'error') statusCode = 400

        return response.status(statusCode).json(responseDatabase)
    }
}
