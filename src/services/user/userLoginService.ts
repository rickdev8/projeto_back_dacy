import { UserDTO } from "../../controller/user/UserController";
import { userLoginRepository } from "../../repository/user/userLoginRepository";

export const userLoginService = async (user: UserDTO) => {
  try {
    const response = await userLoginRepository(user);
    return response;
  } catch (error: any) {
    console.error("Erro no userLoginService:", error);
    throw new Error("Falha ao realizar login"); 
  }
};
