# Next.js Developer Portfolio

A developer portfolio generated using Backstage Software Templates.

## Technology Stack

- Next.js 16
- React 19
- TypeScript
- Docker
- Docker Compose
- GitHub Actions
- Backstage

## Local Development

Install dependencies:

    npm ci

Start the development server:

    npm run dev

Open http://localhost:3000.

## Production Build

    npm run build
    npm start

## Docker

Build the image:

    docker build -t portfolio-nextjs:v1 .

Run the container:

    docker run -d -p 3000:3000 --name portfolio-nextjs portfolio-nextjs:v1

Health endpoint:

http://localhost:3000/api/health

## Backstage Catalog

This project is registered as a Component in the Backstage Software Catalog.

## CI/CD Architecture

The CI/CD pipeline is managed centrally by the nextjs-portfolio-cicd repository.

The deployment process is triggered through the Backstage "Deploy Next.js Portfolio" software template.

The central GitHub Actions workflow:

1. Checks out the generated public GitHub repository.
2. Installs dependencies and builds the Next.js application.
3. Builds the Docker image.
4. Publishes the image to Docker Hub.
5. Deploys the image on the local Ubuntu VM using Docker Compose and a self-hosted GitHub Actions runner.
6. Verifies the container health and HTTP health endpoint.

The generated repository does not contain its own CI/CD workflow.

## Health Check

    curl http://localhost:3000/api/health
