import { TariffEntity } from '../../domain/entities/TariffEntity'
import { TariffRepository } from '../../domain/repositories/TariffRepository'

export class SaveTariffCommand {
    private tariffRepository: TariffRepository

    constructor(tariffRepository: TariffRepository) {
        this.tariffRepository = tariffRepository
    }

    public async execute(tariffs: TariffEntity[]): Promise<{ sucess: boolean }> {
        return await this.tariffRepository.save(tariffs)
    }
}
