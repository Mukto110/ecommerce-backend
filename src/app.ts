import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { ProductRoutes } from "./modules/product/product.route";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/products", ProductRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Global error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "An internal server error occurred",
    error: err.message,
  });
});

export default app;
