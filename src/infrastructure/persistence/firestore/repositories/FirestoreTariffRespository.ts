import { db } from '..'
import { TariffEntity } from '../../../../domain/entities/TariffEntity'
import { TariffRepository } from '../../../../domain/repositories/TariffRepository'

export class FirestoreTariffRepository implements TariffRepository {
    private readonly collection = db.collection('tariffs-test')

    allPerTypeCard: (typeCard: string) => Promise<TariffEntity[]>

    public async save(tariffs: TariffEntity[]) {
        let sucess = true

        try {
            for (let i = 0; i < tariffs.length; i++) {
                await this.collection.add(tariffs[i])
            }
        } catch {
            sucess = false
        }

        return { sucess }
    }
}
