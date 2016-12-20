FROM rodrigowirth/alpine-node:7.2.1

COPY . /src
RUN npm install --unsafe-perm
