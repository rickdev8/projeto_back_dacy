import { Sale } from "../interfaces/SaleInterface";
import { EditSaleRepository } from "../repository/EditSaleRepository";

export const EditSaleService = async (id: string, data: Sale) => {
  try {
    await EditSaleRepository(id, data);
  } catch (erro) {
    throw new Error();
  }
};
