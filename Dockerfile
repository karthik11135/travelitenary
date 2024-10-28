FROM node:20-alpine

WORKDIR /app

COPY package* ./
COPY prisma ./prisma

RUN npm install

COPY . .

CMD ["sh", "-c", "npx prisma migrate deploy && npm run dev"]
FROM node:20-alpine

WORKDIR /app

COPY package* ./
COPY prisma ./prisma

RUN npm install
RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && npm run dev"]
FROM node:20-alpine

WORKDIR /app

COPY package* ./
COPY prisma ./prisma

RUN npm install
RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && npm run dev"]


FROM node:20-alpine

WORKDIR /app

COPY package* ./
COPY prisma ./prisma

RUN npm install
RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && npm run dev"]
