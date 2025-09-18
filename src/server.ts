import fastify from "fastify";
import MainRoutes from "./routes/MainRoutes";
import cors from "@fastify/cors";

const app = fastify();

app.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
});

app.register(MainRoutes);

const PORT = Number(process.env.PORT) || 3000;

app.listen({ port: PORT, host: "0.0.0.0" }, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
