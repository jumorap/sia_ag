FROM node:16

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 4010
CMD [ "npm", "start" ]

# docker build -t sia_general_ag .
# docker run -p 4000:4010 sia_general_ag
