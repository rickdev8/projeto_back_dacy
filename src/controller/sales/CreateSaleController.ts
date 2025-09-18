import { FastifyReply, FastifyRequest } from "fastify";
import { CreateSaleService } from "../../services/sales/CreateVendaService";
import { Sale } from "../../interfaces/SaleInterface";

export const CreateSaleController = async (
  request: FastifyRequest<{ Body: Sale }>,
  reply: FastifyReply
) => {
  const data = request.body;
  try {
    const response = CreateSaleService(data);
    return response;
  } catch (erro) {
    throw new Error();
  }
};
