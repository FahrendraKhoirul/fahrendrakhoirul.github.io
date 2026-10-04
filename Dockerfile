FROM node:alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM caddy:alpine

COPY --from=build /app/out /usr/share/caddy

CMD ["caddy", "file-server", "--root", "/usr/share/caddy", "--listen", ":80"]