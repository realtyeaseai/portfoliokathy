import { db } from './db'
import { siteViews, users, type User, type InsertUser, type SiteViews, type InsertSiteViews } from '@/shared/schema'
import { eq } from 'drizzle-orm'

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getSiteViews(): Promise<SiteViews | undefined>;
  incrementSiteViews(): Promise<SiteViews>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async getSiteViews(): Promise<SiteViews | undefined> {
    const result = await db.select().from(siteViews).limit(1);
    return result[0];
  }

  async incrementSiteViews(): Promise<SiteViews> {
    // Try to get existing views
    const existing = await this.getSiteViews();
    
    if (existing) {
      // Update existing record
      const result = await db
        .update(siteViews)
        .set({ 
          totalViews: existing.totalViews + 1,
          lastUpdated: new Date()
        })
        .where(eq(siteViews.id, existing.id))
        .returning();
      return result[0];
    } else {
      // Create new record
      const result = await db
        .insert(siteViews)
        .values({ totalViews: 1 })
        .returning();
      return result[0];
    }
  }
}

export const storage = new DatabaseStorage();