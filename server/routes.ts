import type { Express } from "express";
import { createServer } from "http";

export async function registerRoutes(app: Express) {
  // Test route to verify Express functionality
  app.get("/api/test", (_req, res) => {
    res.json({ status: "ok", message: "Server is running" });
  });

  return createServer(app);
}