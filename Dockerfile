# Use the official Node.js LTS image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port your app runs on
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]
