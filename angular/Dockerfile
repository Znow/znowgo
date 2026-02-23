FROM node:25.2.1-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /usr/src/app/dist/angular/browser /usr/share/nginx/html
EXPOSE 80
