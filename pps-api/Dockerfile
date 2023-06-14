# Build for Local Development
FROM node:18-alpine as development

RUN sed -i -e 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories && \
    apk update && \
    apk add bash

ENV DATABASE_URL=${DATABASE_URL}
ENV DIGITEKISI_EMAIL=${DIGITEKISI_EMAIL}
ENV DIGITEKISI_PASSWORD=${DIGITEKISI_PASSWORD}
ENV SMTP_HOST=${SMTP_HOST}
ENV EXPRESS_SESSION_SECRET=${EXPRESS_SESSION_SECRET}
ENV JWT_SECRET_KEY=${JWT_SECRET_KEY}
ENV SESSION_STORE_URL=${SESSION_STORE_URL}

WORKDIR /usr/src/app

COPY --chown=node:node package.json pnpm-lock.yaml ./
COPY prisma ./

RUN npm install -g pnpm

RUN pnpm install

COPY --chown=node:node . ./

# Build for app build
FROM node:18-alpine as build

WORKDIR /usr/src/app

COPY --chown=node:node package.json pnpm-lock.yaml ./

COPY prisma ./

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

RUN npm install -g pnpm

RUN pnpm run build  

# Build for production
FROM node:18-alpine as production

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules

COPY --chown=node:node --from=build /usr/src/app/dist ./dist

EXPOSE 8080

CMD ["node", "dist/main.js"]
