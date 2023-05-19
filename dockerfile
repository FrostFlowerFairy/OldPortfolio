# Build environment
FROM node:16 AS build-env
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build

# Application code
FROM node:16
WORKDIR /app
COPY --from=build-env /app/build /app
RUN npm install -g serve
CMD ["serve", "-s"]
