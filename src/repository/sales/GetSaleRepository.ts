import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GetSaleRepository = async (
  page: number,
  limit: number,
  order: string,
  filter: string,
  search: string
) => {
  try {
    const take = Number(limit) || 10;
    const skip = (Number(page) - 1) * take;

    const where: any = {};

    if (filter && filter !== "Todos") {
      where.statusPagamento = filter;
    }

    if (search) {
      where.nomeProduto = {
        contains: search,
        mode: "insensitive",
      };
    }

    const sales = await prisma.sale.findMany({
      skip,
      take,
      where,
      orderBy: {
        createdAt: order === "asc" ? "asc" : "desc",
      },
    });

    const totalCount = await prisma.sale.count({ where });
    const totalPages = Math.ceil(totalCount / take);

    return {
      sales,
      totalPages,
      currentPage: Number(page),
    };
  } catch (erro) {
    console.error("Erro no GetSaleRepository:", erro);
    throw new Error("Erro ao buscar vendas");
  } finally {
    await prisma.$disconnect();
  }
};
