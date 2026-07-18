# WTWR (What to Wear?): Back End

## Description
This is the back-end server for the WTWR (What to Wear?) application — a weather-based clothing recommendation app. The server provides a RESTful API that allows users to be created and retrieved, and allows clothing items to be created, retrieved, deleted, and liked/unliked. Each clothing item is linked to the user who created it and can be tagged with a weather type (hot, warm, or cold) to support weather-based outfit suggestions.

## Technologies and Techniques Used
- **Node.js** and **Express.js** for the server and routing
- **MongoDB** with **Mongoose** for data modeling and persistence
- **validator** for custom URL validation on user avatars and item images
- **ESLint** (Airbnb base config) and **Prettier** for code linting and formatting
- **nodemon** for hot-reloading during development
- Centralized error handling using custom error status constants and Mongoose's `orFail()` helper for consistent 400/404/500 responses
- **Postman** for manual and automated API testing

## Running the Project
`npm run start` — to launch the server 
`npm run dev` — to launch the server with the hot reload feature

### Testing
Before committing your code, make sure you edit the file `sprint.txt` in the root folder. The file `sprint.txt` should contain the number of the sprint you're currently working on. For ex. 12

