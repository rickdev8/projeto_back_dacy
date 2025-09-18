import { GetSalesDataRepository } from "../repository/GetDataSalesRepository";


export const GetDataSalesService = async () => {
  try {
    const response = await GetSalesDataRepository();
    return response;
  } catch (erro) {
    throw new Error();
  }
};
