import { FastifyReply, FastifyRequest } from "fastify";
import { userLoginService } from "../../services/user/userLoginService";

export type UserDTO = { email: string; password: string };
export const UserController = async (
  request: FastifyRequest<{ Body: UserDTO }>,
  reply: FastifyReply
) => {
  try {
    const dataUser = request.body;

    const result = await userLoginService(dataUser);

    return reply.status(200).send({
      success: true,
      data: result,
    });
  } catch (error: any) {
    console.error("Erro no UserController:", error);

    return reply.status(400).send({
      success: false,
      message: error.message || "Erro ao realizar login",
    });
  }
};
