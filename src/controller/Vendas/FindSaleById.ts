import { FastifyReply, FastifyRequest } from "fastify";
import { FindSaleByIdService } from "../../services/FindSaleById";

export const FindSaleById = async (
  request: FastifyRequest<{ Params: string }>,
  reply: FastifyReply
) => {
  const id = request.params;
  try {
    const response = await FindSaleByIdService(id);
    return response;
  } catch (erro) {
    throw new Error();
  }
};
