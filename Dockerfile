FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy all source files
COPY . .

# Build the app
RUN yarn build

# Set environment variables
ENV NODE_ENV=production
EXPOSE 8080

# Start the app
CMD ["node", "dist/main"]
