import { FastifyInstance } from "fastify";
import { CreateSaleController } from "../controller/sales/CreateSaleController";
import { GetSalesController } from "../controller/sales/GetSalesController";
import { FindSaleById } from "../controller/sales/FindSaleById";
import { EditSaleController } from "../controller/sales/EditSaleController";
import { DeleteSaleController } from "../controller/sales/DeleteSaleController";
import { GetDataSalesService } from "../services/sales/GetDataSalesService";
import { UserController } from "../controller/user/UserController";

export default function MainRoutes(app: FastifyInstance) {
  app.post("/homepage/CreateSale", CreateSaleController);
  app.get("/homepage/GetSales/:page/:limit/:filter/:order", GetSalesController);
  app.get("/homepage/FindSale/:id", FindSaleById);
  app.put("/homepage/EditSale/:id", EditSaleController);
  app.delete("/homepage/DeleteSale/:id", DeleteSaleController);
  app.get("/homepage/GetDataSales", GetDataSalesService);
  app.post("/homepage/login", UserController);
}
