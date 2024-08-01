# Step 1
FROM node:16-alpine3.12 as build
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run lint && npm run prettier && npm run stylelint && npm run test:coverage && npm run build

# Stage 2
FROM nginx:1.21-alpine
COPY --from=build /app/build /usr/share/nginx/html


