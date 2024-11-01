# Use Node.js as the base image to build the app
FROM node:18 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy all application files
COPY . .

# Run tests before building the application
RUN npm run test

# Build the application
RUN npm run build

# Use nginx as a minimal server to serve the built static files
FROM nginx:alpine

# Copy the built files from the previous build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 (default for nginx)
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
