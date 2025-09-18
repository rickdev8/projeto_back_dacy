import { GetDataSalesService } from "../../services/GetDataSalesService";
import { GetSaleService } from "../../services/GetSalesService";

export const GetSalesController = async () => {
  try {
    const response = await GetDataSalesService();
    return response;
  } catch (erro) {
    throw new Error();
  }
};
