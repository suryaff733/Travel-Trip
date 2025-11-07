# Dockerfile.dev (for local development)
FROM node:25-alpine3.21

WORKDIR /app

# copy package files first (cache npm install)
COPY package*.json ./

RUN npm install

# copy rest of project
COPY . .

EXPOSE 5005

# run dev server when container starts (not during build)
CMD ["npm", "run", "dev"]
