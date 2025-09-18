import { GetSaleRepository } from "../repository/GetSaleRepository";

export interface PropsRequestParams {
    page: number,
    limit: number
    filter: string,
    order: string
}

export interface PropsRequestQuery {
    search: string
}

export const GetSaleService = async (params: PropsRequestParams, query: PropsRequestQuery) => {
  try {
    const response = await GetSaleRepository(params.page, params.limit, params.order, params.filter, query.search);
    return response;
  } catch (erro) {
    throw new Error();
  }
};
