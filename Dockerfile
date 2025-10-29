# ---------------------------
# Stage 1: Build the React app
# ---------------------------
FROM node:22-alpine AS build

# Set working directory
WORKDIR /app

# Copy only package files first (to cache npm install)
COPY package*.json ./

# Install dependencies (no dev dependencies in prod)
RUN npm ci --only=production

# Copy the rest of the app
COPY . .

# Build the app for production
RUN npm run build

# ---------------------------
# Stage 2: Serve app with NGINX
# ---------------------------
FROM nginx:stable-alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy build output from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy a custom nginx config (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the web server
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
