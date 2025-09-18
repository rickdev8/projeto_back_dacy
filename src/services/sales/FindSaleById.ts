import { FindSaleRepository } from "../../repository/sales/FindSaleByIdRepository";

export const FindSaleByIdService = async (id: string) => {
  try {
    const sale: any = await FindSaleRepository(id);
    return sale;
  } catch (erro) {
    throw new Error();
  }
};
