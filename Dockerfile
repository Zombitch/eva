FROM alpine
RUN apk add --update nodejs
RUN apk add --update npm
RUN apk add --update wget
RUN apk add --update unzip
RUN npm install -g @angular/cli
RUN wget https://github.com/Zombitch/eva/archive/refs/heads/main.zip
RUN unzip main.zip
RUN cd eva-main && npm i && npm start