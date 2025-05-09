# Build Stage
FROM node:18-alpine AS build
WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production Stage
FROM nginx:stable-alpine AS production
COPY --from=build /build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]