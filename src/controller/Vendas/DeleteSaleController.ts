import { FastifyReply, FastifyRequest } from "fastify";
import { FindSaleByIdService } from "../../services/FindSaleById";
import { Sale } from "../../interfaces/SaleInterface";
import { EditSaleService } from "../../services/EditSaleService";
import { DeleteSaleService } from "../../services/DeleteSaleService";

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
