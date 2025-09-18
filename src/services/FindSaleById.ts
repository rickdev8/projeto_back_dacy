import { Sale } from "../interfaces/SaleInterface";
import { CreateSaleRepository } from "../repository/CreateSaleRepository";
import { FindSaleRepository } from "../repository/FindSaleByIdRepository";

export const FindSaleByIdService = async (id: string) => {
  try {
    const sale: any = await FindSaleRepository(id);
    return sale;
  } catch (erro) {
    throw new Error();
  }
};
