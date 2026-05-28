# Stage 1: Build the React application
FROM node:20-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

# Run build to generate static files in dist
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy built application assets from the build stage
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Copy our custom Nginx config file
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
