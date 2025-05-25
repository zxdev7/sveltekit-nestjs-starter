FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

# Copy package.json files for workspace
COPY package.json yarn.lock ./
COPY apps/frontend/package.json ./apps/frontend/
COPY packages/*/package.json ./packages/*/

# Install dependencies using Yarn
RUN yarn install --frozen-lockfile

# Copy the rest of the source code
COPY . .

# Build SvelteKit application
RUN yarn build:web

# Use a smaller image for production
FROM node:20-alpine AS production

# Create app directory
WORKDIR /app

# Copy package.json files
COPY package.json yarn.lock ./
COPY apps/frontend/package.json ./apps/frontend/
COPY packages/*/package.json ./packages/*/

# Install production dependencies only
RUN yarn install --frozen-lockfile --production

# Copy build from previous stage
COPY --from=base /app/apps/frontend/build ./apps/frontend/build
COPY --from=base /app/apps/frontend/package.json ./apps/frontend/package.json
COPY .env* ./

# Expose the port
EXPOSE 5173

# Command to run the application
CMD ["yarn", "run", "--cwd", "apps/frontend", "preview", "--host", "0.0.0.0"]
