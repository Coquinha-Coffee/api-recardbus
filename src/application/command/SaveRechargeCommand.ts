import { RechargeEntity } from "../../domain/entities/RechargeEntity"
import { RechargeRepository } from "../../domain/repositories/RechargeRepository"

export class SaveRechargeCommand {
    private rechargeRepository: RechargeRepository

    constructor(rechargeRepository: RechargeRepository) {
        this.rechargeRepository = rechargeRepository
    }

    public async execute(recharge: RechargeEntity): Promise<{ id: string }> {
        return this.rechargeRepository.save(recharge)
    }
}
