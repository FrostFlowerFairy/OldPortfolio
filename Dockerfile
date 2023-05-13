FROM node:14
WORKDIR /app
COPY build ./
RUN npm i -g serve
EXPOSE 3000
CMD ["serve", "-s"]
