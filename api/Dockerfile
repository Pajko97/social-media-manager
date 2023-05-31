# Base image
FROM ubuntu:22.04

# Set environment variables
ENV NODE_VERSION=14 \
    POSTGRES_VERSION=13 \
    DEBIAN_FRONTEND=noninteractive

# Install system dependencies
RUN apt-get update && apt-get install -y \
    curl \
    gnupg2 \
    && curl -sL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -

# Install Node.js
RUN apt-get install -y nodejs

# Install PostgreSQL
RUN apt-get install -y postgresql-${POSTGRES_VERSION} \
    && rm -rf /var/lib/apt/lists/*

# Create a new directory for the app
WORKDIR /app

# Copy package.json and package-lock.json to the app directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app source code to the app directory
COPY . .

# Expose the desired port (replace 3000 with your app's port)
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]