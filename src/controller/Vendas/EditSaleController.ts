import { FastifyReply, FastifyRequest } from "fastify";
import { Sale } from "../../interfaces/SaleInterface";
import { EditSaleService } from "../../services/EditSaleService";

export const EditSaleController = async (
  request: FastifyRequest<{ Params: string, Body: Sale }>,
  reply: FastifyReply
) => {
  const id = request.params;
  const sale: Sale = request.body
  try {
    const response = await EditSaleService(id, sale);
    return response;
  } catch (erro) {
    throw new Error();
  }
};
