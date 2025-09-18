import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const DeleteSaleRepository = async (RefId: any) => {
  try {
    const saleDelete = await prisma.sale.delete({
      where: {
        id: RefId.id,
      },
    });
    return saleDelete;
  } catch (erro) {
    throw new Error();
  } finally {
    prisma.$disconnect();
  }
};
