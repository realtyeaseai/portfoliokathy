import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const siteViews = pgTable("site_views", {
  id: serial("id").primaryKey(),
  totalViews: integer("total_views").notNull().default(0),
  lastUpdated: timestamp("last_updated").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertSiteViewsSchema = createInsertSchema(siteViews).pick({
  totalViews: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertSiteViews = z.infer<typeof insertSiteViewsSchema>;
export type SiteViews = typeof siteViews.$inferSelect;
