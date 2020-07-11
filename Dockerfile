FROM node:14

ENV NODE_ENV development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9000

RUN npm install -g nodemon

CMD [ "npm", "run", "serve"]