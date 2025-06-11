# Fincore 🏦

**Fincore** is a modern, microservices-based fintech backend system built with Node.js. It showcases key backend engineering concepts like:
- Microservices
- Rate Limiting
- Caching
- CDN Integration
- Webhooks
- Database Sharding
- Message Queues

## 🔧 Services

| Service | Description |
|--------|-------------|
| `auth-service` | User registration, login, JWT authentication |
| `transaction-service` | (Planned) Handle and record user transactions |
| `webhook-service` | (Planned) Notify 3rd-party systems on events |

## 📦 Tech Stack

- Node.js + Express
- MySQL + Sequelize (planned)
- Redis (planned)
- RabbitMQ (planned)
- Docker + Docker Compose
- JWT, Bcrypt, Dotenv

## 🛠️ Setup

```bash
cd auth-service
npm install
cp .env.example .env
node server.js
