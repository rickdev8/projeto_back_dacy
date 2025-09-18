import { PrismaClient } from "@prisma/client";
import { UserDTO } from "../../controller/user/UserController";

const prisma = new PrismaClient();

export const userLoginRepository = async (user: UserDTO) => {
  const findUSer: UserDTO[] = await prisma.user.findMany({
    where: {
      email: user.email,
    },
  });

  if (
    user.email === findUSer[0].email &&
    user.password === findUSer[0].password
  ) {
    return findUSer;
  } else {
    throw new Error("Senha ou E-mail incorretos!");
  }
};
