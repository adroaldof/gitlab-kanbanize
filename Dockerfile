FROM rodrigowirth/alpine-node:7.2.1-onbuild

COPY . /src
RUN npm install --unsafe-perm
