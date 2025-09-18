import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const DeleteSaleRepository = async (RefId: any) => {
  try {
    await prisma.sale.delete({
      where: {
        id: RefId.id,
      },
    });
  } catch (erro) {
    throw new Error();
  }
};
