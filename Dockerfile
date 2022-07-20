FROM node:lts-alpine

WORKDIR /usr/app
COPY package*.json ./

RUN npm install -g @angular/cli
RUN npm install

COPY . .

EXPOSE 4200

CMD [ "npm", "start" ]
