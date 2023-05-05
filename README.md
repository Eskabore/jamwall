# JamWall Chat App

This is a fullstack chat application that allows users to send and receive messages in real-time, built using the MERN stack. The front-end is built using React with Material UI, Redux Toolkit, and React Router, while the back-end is built using Node.js and MongoDB with Mongoose. Users can create an account and log in to the chat app with authentication powered by bcrypt and JSON Web Tokens (JWT). Users can like and dislike messages with likes, and toggle between light and dark mode with a user-friendly interface. The chat app also features responsive design that allows it to function seamlessly on both desktop and mobile devices.

## Demo

You can check out a live demo of the chat app [here](https://jl-turquin.com/).

## Features

-   Authentication: Users can create an account and log in to the chat app.
-   Likes: Users can like and dislike messages.
-   Dark Mode: Users can toggle between light and dark mode.
-   Responsive Design: The chat app is designed to work on desktop and mobile devices.

## Technologies Used

The chat app was built using the following technologies:

### Front-end

-   React
-   Material UI
-   Redux Toolkit
-   React Router
-   React Dropzone
-   Formik
-   Yup
-   Google Fonts

### Back-end

-   Node.js
-   MongoDB
-   Mongoose
-   Socket.IO
-   bcrypt
-   jwt
-   dotenv
-   jsonwebtoken
-   multer
-   gridfs-storage

## Getting Started

To run the chat app on your own machine, follow these steps:

1.  Clone this repository to your local machine.
2.  Navigate to the root directory of the project.
3.  Install dependencies by running `npm install` in both the `client` and `server` directories.
4.  Create a `.env` file in the `server` directory with the following variables:
    -   `MONGODB_URI`: MongoDB connection string
    -   `JWT_SECRET`: Secret key for JSON Web Tokens
5.  Run `npm start` in both the `client` and `server` directories to start the chat app.

## Contributing

If you'd like to contribute to the chat app, please submit a pull request with your changes. Before submitting a pull request, make sure that your changes are consistent with the project's style and standards.
