FROM node:18-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
COPY env.sh /env.sh
RUN chmod +x /env.sh
RUN . /env.sh && npm run build

EXPOSE 3000
CMD ["npm", "start"]
