# Build environment
FROM node:16 AS build-env
WORKDIR /app
COPY package.json .
RUN npm install --legacy-peer-deps

# Application code
FROM node:16
WORKDIR /app
COPY --from=build-env /app /app
COPY . .
CMD ["npm", "start"]