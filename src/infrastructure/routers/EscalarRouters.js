import { Router } from "express";

export default function escalarRoutes(controller) {
  const router = Router();
  router.post("/escalars", (req, res) => controller.create(req, res));
  router.get("/escalars",  (req, res) => controller.getAll(req, res));
  return router;
}