import { GetDataSalesService } from "../../services/sales/GetDataSalesService";


export const GetSalesController = async () => {
  try {
    const response = await GetDataSalesService();
    return response;
  } catch (erro) {
    throw new Error();
  }
};
