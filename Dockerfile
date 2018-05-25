#FROM node:carbon
FROM arm32v7/node
WORKDIR /app
COPY build/ ./
EXPOSE 5000
RUN echo {} > ./package.json
RUN npm install serve
CMD [ "./node_modules/.bin/serve", "-s", "."]