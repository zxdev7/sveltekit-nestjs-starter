# SvelteKit-NestJS-Starter

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/elYABT?referralCode=a3RP9l)

A full-stack starter template for building modern web applications with SvelteKit frontend and NestJS backend API in a monorepo structure.

## ✨ Features

- **Monorepo Structure**: npm workspaces for managing multiple packages
- **Frontend**: SvelteKit with TypeScript
- **Backend**: NestJS with TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **API Documentation**: Swagger/OpenAPI integration
- **Docker Support**: Docker and Docker Compose configuration for easy development and deployment
- **Railway Deployment**: One-click deployment to Railway

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or later)
- PostgreSQL database

### Development

1. Clone the repository:

```bash
git clone https://github.com/yourusername/sveltekit-nestjs-starter.git
cd sveltekit-nestjs-starter
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

Update the `.env` file with your database credentials and other configuration.

4. Start the development servers:

```bash
npm run dev
```

This will start both the frontend and backend in development mode.

### Using Docker

You can also use Docker to run the entire application stack:

```bash
docker-compose up -d
```

## 📁 Project Structure

```
├── apps/
│   ├── api/              # NestJS backend
│   │   ├── prisma/       # Prisma schema and migrations
│   │   └── src/          # Backend source code
│   └── frontend/         # SvelteKit frontend
│       └── src/          # Frontend source code
├── packages/             # Shared packages
└── docker-compose.yml    # Docker configuration
```

## 🛠️ Development

### Backend (NestJS)

```bash
# Start backend in development mode
npm run dev:api

# Run backend tests
npm run test --workspace=apps/api

# Generate Prisma client
cd apps/api && npx prisma generate

# Run database migrations
cd apps/api && npx prisma migrate dev
```

### Frontend (SvelteKit)

```bash
# Start frontend in development mode
npm run dev:web

# Build frontend for production
npm run build:web
```

## 🚢 Deployment

### Railway

The easiest way to deploy this application is using the Railway button at the top of this README. This will automatically set up all the necessary services.

### Manual Deployment

You can also deploy the application manually:

1. Build the application:

```bash
npm run build
```

2. Start the production server:

```bash
cd apps/api && npm run start:prod
cd apps/frontend && npm run preview
```

## 📚 Documentation

- API Documentation: Access Swagger UI at http://localhost:5000/api when running in development mode
- Frontend Routes:
  - `/` - Home page

## 🧰 Common Issues and Solutions

- **TypeScript type declaration issues**: Create global.d.ts with proper type declarations
- **Prisma initialization problems**: Ensure .env file exists with correct DATABASE_URL
- **Value imports being used as types**: Use typeof keyword
- **Running Prisma in workspace structure**: Run commands from /apps/api directory

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
