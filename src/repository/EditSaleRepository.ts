import { PrismaClient } from "../../generated/prisma";
import { Sale } from "../interfaces/SaleInterface";

const prisma = new PrismaClient();

export const EditSaleRepository = async (RefId: any, sale: Sale) => {

  try {
    await prisma.sale.update({
      where: {
        id: RefId.id,
      },
      data: {
        data: new Date(),
        metodoPagamento: sale.metodoPagamento,
        nomeProduto: sale.nomeProduto,
        precoCusto: Number(sale.precoCusto),
        precoVenda: Number(sale.precoVenda),
        quantidadeProduto: Number(sale.quantidadeProduto),
        statusPagamento: sale.statusPagamento,
      },
    });
  } catch (erro) {
    throw new Error();
  }
};
