import { PrismaClient } from "../../generated/prisma";

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
        contains: search,
        mode: "insensitive", 
      };
    }

    let orderBy: any = { createdAt: "desc" };

    switch (order) {
      case "Mais antigos":
        orderBy = { data: "asc" };
        break;
      case "Maior preço":
        orderBy = { precoVenda: "desc" };
        break;
      case "Menor preço":
        orderBy = { precoVenda: "asc" };
        break;
      case "Ordem alfabética":
        orderBy = { nomeProduto: "asc" };
        break;
      default:
        orderBy = { data: "desc" }; 
    }

    const sales = await prisma.sale.findMany({
      skip,
      take: Number(limit),
      where,
      orderBy,
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
