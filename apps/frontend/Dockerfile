FROM node:20-slim
WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev
LABEL org.opencontainers.image.source=https://github.com/BenHesketh21/gitops-hello-world
COPY app.js ./
EXPOSE 3000
CMD ["node", "app.js"]
