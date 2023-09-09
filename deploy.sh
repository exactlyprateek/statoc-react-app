#!/bin/bash

# Define the repository URL
REPO_URL="https://github.com/exactlyprateek/react_blogs.git"

# Update package list and install curl
sudo apt update && sudo apt install -y curl

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo bash -
sudo apt-get install -y nodejs

# Clone the repository
git clone $REPO_URL

# Navigate to the project directory (assuming repository name is "project-name")
cd project-name

# Install node dependencies
npm install

# Run the app in production mode
npm start