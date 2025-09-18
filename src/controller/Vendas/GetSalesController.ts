import { FastifyReply, FastifyRequest } from "fastify";
import { GetSaleService, PropsRequestParams, PropsRequestQuery } from "../../services/GetSalesService";

export const GetSalesController = async (
  request: FastifyRequest <{ Params: PropsRequestParams, Querystring: PropsRequestQuery}>,
  reply: FastifyReply
) => {
    const params = request.params
    const query = request.query
  try {
    const response = await GetSaleService(params, query);
    return response;
  } catch (erro) {
    throw new Error();
  }
};
