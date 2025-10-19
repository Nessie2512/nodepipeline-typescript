import { Router } from "express";

const clientRouter = Router();

clientRouter.get("/clients", (_, res) => {
  res.json({ message: "List of clients" });
});


export { clientRouter };