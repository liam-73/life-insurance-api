# Life Insurance Recommendation API

A NestJS backend API that accepts user profile data and returns a personalized life insurance recommendation.

## Tech Stack

- **NestJS** (Node.js)
- **PostgreSQL** (via Docker)
- **TypeORM**
- **Docker + Docker Compose**

## Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/liam-73/life-insurance-api.git
cd server
cp .env.example .env
```

### 2. Run with Docker Compose

```bash
docker-compose up --build
```

The API will be available at `http://localhost:8080`.

### 3. API Endpoint

#### `POST /recommendations`

Request body:

```json
{
  "age": 30,
  "income": 80000,
  "dependents": 2,
  "riskTolerance": "high"
}
```

Response:

```json
{
  "recommendation": "Term Life – $500,000 for 20 years",
  "reason": "Young age and high risk tolerance suggest aggressive term coverage."
}
```

## Deployment Instructions (AWS)

To deploy this backend to AWS:

### Option A: Elastic Beanstalk (Simpler)

1. Create a Dockerfile and `.ebextensions` if needed.
2. Use EB CLI:

```bash
eb init
eb create life-insurance-api
```

### Option B: ECS (Fargate)

1. Push Docker image to Amazon ECR:

```bash
aws ecr create-repository --repository-name life-insurance-api
aws ecr get-login-password | docker login --username AWS --password-stdin <account>.dkr.ecr.region.amazonaws.com
docker build -t life-insurance-api .
docker tag life-insurance-api:latest <ecr-url>/life-insurance-api:latest
docker push <ecr-url>/life-insurance-api:latest
```

2. Create ECS service using Fargate and expose port 8080.
3. Connect to RDS PostgreSQL or host PostgreSQL on EC2/ECS sidecar.
