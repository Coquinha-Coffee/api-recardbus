import { TariffEntity } from '../../domain/entities/TariffEntity'
import { TariffRepository } from '../../domain/repositories/TariffRepository'

export class GetPerTypeCardTariffQuery {
    private tariffRepository: TariffRepository

    constructor(tariffRepository: TariffRepository) {
        this.tariffRepository = tariffRepository
    }

    public async execute(
        typeCard: string
    ): Promise<{ status: string; data: TariffEntity[] }> {
        return this.tariffRepository.allPerTypeCard(typeCard)
    }
}
