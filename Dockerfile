FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build && npm run export   # خروجی استاتیک: /app/out

FROM nginx:alpine
WORKDIR /usr/share/nginx/html

RUN apk add --no-cache findutils

COPY --from=builder /app/out ./

COPY env.sh /docker-entrypoint.d/50-env.sh
RUN chmod +x /docker-entrypoint.d/50-env.sh

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
