FROM node:argon

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy and install depedencies
COPY package.json /usr/src/app/
RUN npm install

# Copy app

COPY . /usr/src/app/

# 8080 by default
EXPOSE 8080

CMD ["/bin/sh", "start.sh"]
