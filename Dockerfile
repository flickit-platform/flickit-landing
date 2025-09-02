FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN apk add --no-cache findutils

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=deps    /app/node_modules ./node_modules

EXPOSE 3000

CMD sh -lc '\
  set -eu; \
  echo "[startup] replacing PLATFORM_* in .next ..."; \
  escape() { printf "%s" "$1" | sed -e "s/[\\/&]/\\\\&/g" -e "s/\\\\/\\\\\\\\/g"; }; \
  env | grep "^PLATFORM_" | while IFS="=" read -r key value; do \
    esc=$(escape "$value"); \
    echo " - $key=$value"; \
    find .next -type f \( -name "*.js" -o -name "*.html" -o -name "*.json" -o -name "*.css" \) -print0 \
      | xargs -0 sed -i "s|$key|$esc|g"; \
  done; \
  echo "[startup] starting Next..."; \
   npm start'