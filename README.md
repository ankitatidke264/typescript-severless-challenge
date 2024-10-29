# Requirements
Node.js (v18 or higher)
Yarn (v1.x)
Serverless Framework (globally installed)
AWS CLI (configured with your credentials if deploying)

# Setup and Installation
Clone the repository:
git clone https://github.com/your-username/your-repo-name.git

# Install Dependencies:
yarn install

# Development Workflow
Linting:
yarn workspace lambda-function lint

Testing:
yarn workspace lambda-function test

Running Locally:
yarn workspace infrastructure start

Access the API locally at http://localhost:3000/hello?name=John.