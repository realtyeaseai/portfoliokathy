# Professional Portfolio Application

## Overview

This is a full-stack web application built with React/TypeScript frontend and Express.js backend. The application serves as a professional portfolio with virtual business card functionality, featuring modern UI components and a clean, responsive design.

## System Architecture

The project follows a monorepo structure with clear separation between client, server, and shared code:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but not fully implemented)
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing

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
Currently defines a basic user table structure:
- Users table with id, username, and password fields
- Zod validation schemas for type safety
- Prepared for PostgreSQL deployment

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

Changelog:
- June 26, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.