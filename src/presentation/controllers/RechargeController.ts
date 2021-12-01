import { Request, Response } from 'express'
import { SaveRechargeCommand } from '../../application/command/SaveRechargeCommand'
import { GetRechargesPerCardQuery } from '../../application/query/GetRechargesPerCardQuery'
import { RechargeEntity } from '../../domain/entities/RechargeEntity'
import { FirestoreRechargeRepository } from '../../infrastructure/persistence/firestore/repositories/FirestoreRechargeRepository'

interface IRecharge {
    idCard: string
    amountTicket: number
    priceTotal: number
}

export class RechargeController {
    public async index(request: Request, response: Response) {
        const { idCard } = request.params as { idCard: string }
        let statusCode = 302
        let responseDatabase: {
            status?: string
            data?: RechargeEntity[] | []
        } = {}

        console.log('index')

        try {
            const firestore = new FirestoreRechargeRepository()
            const query = new GetRechargesPerCardQuery(firestore)

            responseDatabase = await query.execute(idCard)

            if (responseDatabase.status === 'error') statusCode = 404

            console.log(responseDatabase)
        } catch {
            console.error('Catch')
            statusCode = 404
        }

        return response.status(statusCode).json(responseDatabase)
    }

    public async create(request: Request, response: Response) {
        const rechargeBody = request.body as IRecharge
        let recharge = { ...rechargeBody, date: new Date() }
        let responseDatabase: { status?: string; data?: RechargeEntity | {} } =
            {}
        let statusCode = 201

        try {
            const firestore = new FirestoreRechargeRepository()
            const command = new SaveRechargeCommand(firestore)

            responseDatabase = await command.execute(recharge)

            if (responseDatabase.status === 'error') statusCode = 400
        } catch {
            statusCode = 400
        }

        return response.status(statusCode).json(responseDatabase)
    }
}
