import fastify from "fastify";
import MainRoutes from "./routes/MainRoutes";

import cors from "@fastify/cors";

const app = fastify();

app.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
});

app.register(MainRoutes);

app.listen({ port: 3000, host: "0.0.0.0" }, () => {
  console.log("Servidor rodando em http://localhost:4000");
});
