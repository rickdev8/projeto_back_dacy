import { DeleteSaleRepository } from "../repository/DeleteSaleRepository";

export const DeleteSaleService = async (id: string) => {
  try {
    await DeleteSaleRepository(id);
  } catch (erro) {
    throw new Error();
  }
};
