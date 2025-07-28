FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy app files
COPY . .

# Install dependencies
RUN npm install

# Expose the port
EXPOSE 3000

# Start the app
CMD ["node", "app.js"]
