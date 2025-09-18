import { FastifyInstance } from "fastify";
import { CreateSaleController } from "../controller/Vendas/CreateSaleController";
import { GetSalesController } from "../controller/Vendas/GetSalesController";
import { FindSaleById } from "../controller/Vendas/FindSaleById";
import { EditSaleController } from "../controller/Vendas/EditSaleController";
import { DeleteSaleController } from "../controller/Vendas/DeleteSaleController";
import { GetDataSalesService } from "../services/GetDataSalesService";

export default function MainRoutes(app: FastifyInstance) {
  app.post("/homepage/CreateSale", CreateSaleController);
  app.get("/homepage/GetSales/:page/:limit/:filter/:order", GetSalesController);
  app.get("/homepage/FindSale/:id", FindSaleById);
  app.put("/homepage/EditSale/:id", EditSaleController);
  app.delete("/homepage/DeleteSale/:id", DeleteSaleController);
  app.get("/homepage/GetDataSales", GetDataSalesService);
}
