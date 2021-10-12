# Install the base requirements for the app.

# Step 1
FROM node:12.20 as build-deps

WORKDIR /app

COPY package.json ./
RUN yarn 
COPY . .
#RUN yarn build

# Step 2
#FROM nginx:1.17.0-alpine

#COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html

EXPOSE 3000

#CMD ["nginx", "-g", "daemon off;"] 
CMD ["yarn", "start"] 

# docker run --rm -v ${PWD}/src:/app/src -itd -p 3002:3000 --name food-dev food_1


#docker run -e CHOKIDAR_USEPOLLING=true -v /Users/eon/eon_web/full-version/src:/app/src -itd -p 3001:3000 --name biznet-one biznet_1

# --rm [Automatically remove the container when it exits]
# -v [Changes in docker file when chang in local]
# -itd [interactive terminal (-t, Allocate a pseudo-TTY) (-d, Run container in background and print container ID)]
# -p [LOCAL_PORT:DOCKER_PORT]
# -n [CONTAINER_NAME]