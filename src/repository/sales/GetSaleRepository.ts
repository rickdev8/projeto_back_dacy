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
    const skip = (page - 1) * limit;

    const where: any = {};

    if (filter !== "Todos") {
      where.statusPagamento = filter;
    }

    if (search) {
      where.nomeProduto = {
        startsWith: search, 
        mode: "insensitive",
      };
    }

    const sales = await prisma.sale.findMany({
      skip,
      take: Number(limit),
      where,
      orderBy: {
        createdAt: order === "asc" ? "asc" : "desc",
      },
    });

    const totalCount = await prisma.sale.count({ where });
    const totalPages = Math.ceil(totalCount / limit);

    return {
      sales,
      totalPages,
      currentPage: page,
    };
  } catch (erro) {
    console.error("Erro no GetSaleRepository:", erro);
    throw new Error("Erro ao buscar vendas");
  }
};
