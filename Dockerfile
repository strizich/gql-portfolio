# Build Stage
FROM node:8.9.0-alpine as build-stage

RUN apk add --update nginx nodejs

RUN mkdir -p /tmp/nginx/portfolio
RUN mkdir -p /var/log/nginx
RUN mkdir -p /var/www/html

COPY package.json ./
COPY yarn.lock ./

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /tmp/nginx/portfolio

COPY . .
RUN npm install -g http-server
RUN npm install -g -s --no-progress yarn && \
    yarn && \
    yarn run build && \
    yarn cache clean

RUN cp -r dist/* /var/www/html

RUN chown nginx:nginx /var/www/html

CMD ["nginx", "-g", "daemon off;"]
EXPOSE 8080