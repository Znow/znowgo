# Start from the latest Node.js base image
FROM node:latest

# Add Maintainer Info
LABEL maintainer="Your Name <youremail@domain.com>"

# Set the Current Working Directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install all dependencies. Dependencies will be cached if the package.json and package-lock.json files are not changed
RUN npm install

# Copy the source from the current directory to the Working Directory inside the container
COPY . .

# Build the Node.js app
RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the server
CMD ["npm", "start"]