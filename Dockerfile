# Use Node.js 18 Alpine as base image
FROM node:18-alpine

# Set working directory in container
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Install serve package globally to serve the built application
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Serve the built application
CMD ["serve", "-s", "build", "-l", "3000"]
