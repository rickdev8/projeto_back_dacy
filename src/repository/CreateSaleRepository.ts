import { PrismaClient, Sale } from "../../generated/prisma";

const prisma = new PrismaClient();

export const CreateSaleRepository = async (data: Sale) => {
  try {
    console.log(data);
    const venda = await prisma.sale.create({
      data: {
        nomeProduto: data.nomeProduto,
        quantidadeProduto: Number(data.quantidadeProduto),
        metodoPagamento: data.metodoPagamento,
        statusPagamento: data.statusPagamento,
        precoVenda: Number(data.precoVenda),
        precoCusto: Number(data.precoCusto),
        data: new Date(),
      },
    });
    return venda;
  } catch (erro) {
    throw new Error("Erro ao criar venda");
  }
};
