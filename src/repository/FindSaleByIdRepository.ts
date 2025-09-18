import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const FindSaleRepository = async (RefId: any) => {
  try {
    const sale = await prisma.sale.findMany({
      where: {
        id: RefId.id,
      },
    });
    return sale;
  } catch (erro) {
    throw new Error();
  }
};
