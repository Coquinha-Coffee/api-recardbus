import { RechargeEntity } from "../../domain/entities/RechargeEntity";
import { RechargeRepository } from "../../domain/repositories/RechargeRepository";

export class GetRechargesPerCardQuery {
    private rechargeRespository: RechargeRepository

    constructor(rechargeRepository: RechargeRepository) {
        this.rechargeRespository = rechargeRepository
    }

    public async execute(idCard: string): Promise<RechargeEntity[]> {
        return await this.rechargeRespository.allPerCard(idCard)
    }
}
