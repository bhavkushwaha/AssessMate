# AssessMate

**AssessMate** is designed to create an intelligent, multi-functional platform to enhance user learning and development through generative AI technology. The platform caters to various needs such as personalized doubt solving, quiz generation for practice in specific topics, code assistance for developers, and interview preparation guide. This project aims to simplify the assessment process by allowing users to generate quizzes on their favorite topics. It also allows users to generate frequently asked interview questions based on job titles and descriptions. Moreover, functionalities such as resolving doubts and providing code support contribute to the project's success.

## Features

AssessMate offers a comprehensive suite of learning tools:

- **Quiz Generation** : Generating quiz questions based on the topic given by the user and the number of questions selected. The users can take quizzes using our quiz platform and get the score immediately after submission. The quizzes can be re-attempted hence multiple attempts are allowed.

- **Doubt Solving**: Solving users' doubts with any questions. The users can ask their doubts and get their doubts solved in conversational mode.

- **Code Generation**: Helping users with anything related to coding.

- **InterviewPrepAI**: Generating interview preparation questions based on the job title and job description. The interview questions generated pertain to the job title and description entered by the user.


## Getting Started

Try our deployed application : https://assessmate-orpin.vercel.app/

Follow these instructions to set up AssessMate on your local machine for development and testing.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:
    ```
    bash
    git clone https://github.com/bhavkushwaha/AssessMate.git
    ```

2. Navigate into the project directory:
    ```
    bash
    cd AssessMate
    ```

3. Install dependencies:
    ```
    bash
    npm install
    ```

4. Set up the database and configure environment variables:

    Create a .env file in the root directory with the following variables:

    
    ## Example .env file

    ```
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = "your_key"
    CLERK_SECRET_KEY = "your_key"
    NEXT_PUBLIC_FORMSPREE_KEY=xdkongqg
    ```
    

## Configuration

AssessMate requires certain environment variables to be set for database connections and API key integration:

- **Database Configuration**: Modify the `.env` file as needed.
    ```
    DATABASE_URL = your_database_url
    ```
- **API Keys**: If using third-party APIs for quiz generation or code snippets, add them in the `.env` file (we used OpenAI )

    ```
    OPENAI_API_KEY=your-openai-api-key

    ```

## Usage

1. Start the development server:

   ```bash
    npm run dev
   ```

2. Open your browser and navigate to:

    
    http://localhost:3000
    

3. To create a production build:

    ```bash
    npm run build
    ```
    
    


## Scripts/Commands

The project includes several scripts to streamline development and deployment:

- `npx prisma db push` : Pushes the prisma schema into the database (only required when connecting to database for the first time).
- `npm start`: Starts the server in production mode.
- `npm run dev`: Starts the server in development mode with hot-reloading.
- `npm run build`: Builds the project for production.