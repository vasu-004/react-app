# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy all backend files
COPY . .

# Expose the backend port
EXPOSE 5000

# Start the backend
CMD ["npm", "start"]
