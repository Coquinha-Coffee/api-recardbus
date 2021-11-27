import { TariffEntity } from "../../domain/entities/TariffEntity"
import { TariffRepository } from "../../domain/repositories/TariffRepository"

export class SaveTariffCommand {
    private tariffRepository: TariffRepository

    constructor(tariffRepository: TariffRepository) {
        this.tariffRepository = tariffRepository
    }

    public async execute(tariff: TariffEntity): Promise<{ id: string}> {
        return this.tariffRepository.save(tariff)
    }
}
