# RealtyEaseAI Virtual Business Card Application

## Overview

This is a modern virtual business card application built with Next.js featuring server-side rendering, API routes, and a responsive design. The application serves as an elegant digital business card for RealtyEaseAI with Kathy Tiburcio as Founder & CEO, featuring a centered company logo, dynamic views counter, and comprehensive service showcases.

## System Architecture

The project is now built as a Next.js full-stack application:

- **Framework**: Next.js 15+ with App Router architecture
- **Frontend**: React with TypeScript, server-side rendering capabilities
- **Backend**: Next.js API Routes replacing Express.js server
- **Database**: PostgreSQL with Drizzle ORM for views tracking
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for client-side state management
- **Deployment**: Optimized for Replit with autoscaling support

## Key Components

### Frontend Architecture
- **Component Library**: Comprehensive shadcn/ui component system with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **Type Safety**: Full TypeScript integration with strict type checking
- **Build System**: Vite with React plugin and development error overlay

### Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **Database Integration**: Drizzle ORM configured for PostgreSQL
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Development Setup**: Hot reload with tsx for TypeScript execution

### Database Schema
Currently defines database tables for:
- Users table with id, username, and password fields
- Site views table with totalViews counter and timestamps
- Zod validation schemas for type safety
- Active PostgreSQL deployment with dynamic views tracking

## Data Flow

1. **Client Requests**: Frontend makes API calls through TanStack Query
2. **API Layer**: Express routes handle requests and interact with storage layer
3. **Storage Layer**: Abstracted interface allows switching between implementations
4. **Response Handling**: Type-safe responses with proper error handling

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **class-variance-authority**: Component variant management

### Data Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with validation
- **Zod**: Runtime type validation

### Database and Backend
- **Drizzle ORM**: Type-safe database queries
- **@neondatabase/serverless**: PostgreSQL connection for serverless environments
- **connect-pg-simple**: PostgreSQL session store

## Deployment Strategy

The application is configured for deployment on Replit with autoscaling:

- **Build Process**: Vite builds the frontend, esbuild bundles the backend
- **Production Server**: Node.js serving both static files and API routes
- **Database**: PostgreSQL integration ready for production
- **Port Configuration**: Runs on port 5000 with external port 80

The server setup includes:
- Static file serving for production builds
- Development mode with Vite middleware integration
- Proper error handling and logging
- Request/response monitoring for API endpoints

## Changelog

- December 28, 2024: **Major Migration**: Converted entire project from React + Express to Next.js 15
  - Implemented App Router architecture with server-side rendering
  - Replaced Express.js routes with Next.js API routes
  - Maintained all existing functionality including views counter and database integration
  - Updated configuration for modern Next.js deployment
- June 28, 2025: Updated branding to RealtyEaseAI with logo integration and website linking
- June 28, 2025: Implemented dynamic views counter with PostgreSQL database integration
- June 26, 2025: Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.