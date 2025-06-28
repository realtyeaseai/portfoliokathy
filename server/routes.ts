import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes for views counter
  app.get("/api/views", async (req, res) => {
    try {
      const views = await storage.getSiteViews();
      res.json({ totalViews: views?.totalViews || 0 });
    } catch (error) {
      console.error(`Error getting views: ${error}`);
      res.status(500).json({ error: "Failed to get views" });
    }
  });

  app.post("/api/views/increment", async (req, res) => {
    try {
      const views = await storage.incrementSiteViews();
      res.json({ totalViews: views.totalViews });
    } catch (error) {
      console.error(`Error incrementing views: ${error}`);
      res.status(500).json({ error: "Failed to increment views" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
