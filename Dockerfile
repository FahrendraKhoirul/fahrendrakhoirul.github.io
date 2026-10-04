FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM caddy:2-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/*.html /usr/share/caddy/
COPY --from=build /app/main.js /usr/share/caddy/
COPY --from=build /app/assets /usr/share/caddy/assets

EXPOSE 80
