FROM node:22-alpine

WORKDIR /app

# Instalar dependencias
COPY package.json package-lock.json ./
RUN npm ci

# Copiar código fuente
COPY . .

# Exponer puerto de desarrollo
EXPOSE 3000

# Variables de entorno para desarrollo
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1

CMD ["npm", "run", "dev"]
