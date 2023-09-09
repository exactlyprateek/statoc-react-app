#!/bin/bash

# Define the repository URL
# REPO_URL="https://github.com/exactlyprateek/statoc-react-app.git"

# Update package list and install curl
# sudo apt update && sudo apt install -y curl

sudo apt install nginx
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo bash -
sudo apt-get install -y nodejs

# Clone the repository
# git clone $REPO_URL

# Navigate to the project directory (assuming repository name is "project-name")
# cd statoc-react-app

# Install node dependencies
npm install

# Run the app in production mode
npm run build

mv build /var/www/html

cd build

find . -maxdepth 1 -exec mv {} .. \;

sudo systemctl restart nginx