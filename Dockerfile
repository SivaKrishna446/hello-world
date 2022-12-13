FROM node:16

# Create app directory
WORKDIR /usr/src/app

# copying package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

EXPOSE 8080
CMD [ "node", "dist/main.js" ]