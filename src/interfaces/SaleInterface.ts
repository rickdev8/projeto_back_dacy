export interface Sale {
  id: string;
  nomeProduto: string;
  quantidadeProduto: number;
  metodoPagamento: string;
  statusPagamento: string;
  precoVenda: number;
  precoCusto: number;
  data: Date;
}
