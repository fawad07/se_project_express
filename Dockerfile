# Step 1: Use an official base image (e.g., Node.js in this example)
FROM node:18-alpine

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the container
COPY . /app

# Step 6: Expose the port the app runs on (e.g., 3000)
EXPOSE 3002

# Step 7: Specify the command to run the app
CMD ["npm", "run", "dev"]
