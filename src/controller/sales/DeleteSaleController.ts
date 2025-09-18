import { FastifyReply, FastifyRequest } from "fastify";
import { Sale } from "../../interfaces/SaleInterface";
import { DeleteSaleService } from "../../services/sales/DeleteSaleService";

export const DeleteSaleController = async (
  request: FastifyRequest<{ Params: string; Body: Sale }>,
  reply: FastifyReply
) => {
  const id = request.params;
  try {
    const response = await DeleteSaleService(id);
    return response;
  } catch (erro) {
    throw new Error();
  }
};
