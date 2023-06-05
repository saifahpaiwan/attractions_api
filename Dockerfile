FROM node:16

# Create app directory
WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 5000

CMD ["npm", "start"]