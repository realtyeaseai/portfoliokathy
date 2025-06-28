import { users, siteViews, type User, type InsertUser, type SiteViews, type InsertSiteViews } from "@shared/schema";
import { db } from "./db";
import { eq, sql } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getSiteViews(): Promise<SiteViews | undefined>;
  incrementSiteViews(): Promise<SiteViews>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getSiteViews(): Promise<SiteViews | undefined> {
    const [views] = await db.select().from(siteViews).limit(1);
    return views || undefined;
  }

  async incrementSiteViews(): Promise<SiteViews> {
    // First, try to get existing record
    const existingViews = await this.getSiteViews();
    
    if (existingViews) {
      // Update existing record
      const [updatedViews] = await db
        .update(siteViews)
        .set({ 
          totalViews: sql`${siteViews.totalViews} + 1`,
          lastUpdated: new Date()
        })
        .where(eq(siteViews.id, existingViews.id))
        .returning();
      return updatedViews;
    } else {
      // Create new record if none exists
      const [newViews] = await db
        .insert(siteViews)
        .values({ totalViews: 1 })
        .returning();
      return newViews;
    }
  }
}

export const storage = new DatabaseStorage();
