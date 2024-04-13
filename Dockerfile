FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
COPY env.sh /docker-entrypoint.d/env.sh
RUN chmod +x /docker-entrypoint.d/env.sh
CMD npm start
EXPOSE 3000
