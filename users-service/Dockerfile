FROM node:16.3.0-alpine
COPY . /opt/app
WORKDIR /opt/app
RUN npm install
CMD [ "npm", "run", "watch" ]