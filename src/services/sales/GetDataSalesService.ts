import { GetSalesDataRepository } from "../../repository/sales/GetDataSalesRepository";



export const GetDataSalesService = async () => {
  try {
    const response = await GetSalesDataRepository();
    return response;
  } catch (erro) {
    throw new Error();
  }
};
