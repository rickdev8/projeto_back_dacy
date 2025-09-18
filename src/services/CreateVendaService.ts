import { Sale } from "../interfaces/SaleInterface";
import { CreateSaleRepository } from "../repository/CreateSaleRepository";

export const CreateSaleService = async (data: Sale) => {
  try {
    await CreateSaleRepository(data);
  } catch (erro) {
    throw new Error();
  }
};
