# Build stage
FROM node:20-alpine as builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application (if you have a build step)
RUN npm run build --if-present

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --only=production

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.js ./
COPY --from=builder /app/pages ./pages
COPY --from=builder /app/lib ./lib
COPY --from=builder /app/models ./models

# Expose the port your app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"] 