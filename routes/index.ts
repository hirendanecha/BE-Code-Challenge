import verifyToken from '../middleware/auth';
import { Router, Express } from 'express';

module.exports = (app: Express) => {
  const router = Router();
  const products = require("../controllers/product.controller");

  router.get("/get_products", products.get_data);

  router.post("/login", products.login)
  router.post("/order_items", verifyToken, products.order_items)

  app.use("/api", router);
};
