import { RechargeEntity } from "../entities/RechargeEntity";

export interface RechargeRepository {
    get: (idRecharge: string) => Promise<RechargeEntity[]>
    save: (recharge: RechargeEntity) => Promise<{ id: string}>
}
