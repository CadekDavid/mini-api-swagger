# Mini API s Swagger UI

Jednoduchá ukázková API aplikace (Node.js + Express) se Swagger dokumentací na **`/api`**.

## 1) Popis API

- **Healthcheck**: `GET /health` – rychlá kontrola běhu aplikace.
- **Posts**: `GET /posts`, `POST /posts` – demo endpointy (MongoDB).

> Plná interaktivní dokumentace je dostupná na **`/api`** (Swagger UI).

## 2) Požadavky na software

- Node.js **18+** (doporučeno LTS)
- NPM (součástí Node.js)
- (Volitelné) Docker + Docker Compose pro lokální MongoDB
- (Alternativa) Vlastní běžící MongoDB (výchozí URL `mongodb://localhost:27017/blog`)

## 3) Jak projekt spustit lokálně

### Varianta A – s Dockerem (doporučeno pro Mongo)
1. Spusť MongoDB:
   ```bash
   docker compose up -d

