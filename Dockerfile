FROM node:18

WORKDIR /home/node
COPY . .

RUN yarn install
RUN yarn build

EXPOSE 8080

CMD ["yarn", "start"]