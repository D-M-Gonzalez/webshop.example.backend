# Front-end APP created for ITCrowd challenge

https://webshop-example-backend.herokuapp.com/

## Intro

    This APP was created to fullfil the objetives of the challenge. Done using React as main framework this app can handle all the basic communication with a server.
    It has done with a basic layout, that has a fixed header/navigation bar, and a dynamic main container that changes when the user interacts. It's an SPA APP,
    which does never forces the user to leave the main page, only using reloads to refresh data from DB.
    The APP was done trying to use good practices and having SOLID principles in mind, using lastest version React Functional Components.

## Resources

- **Basic languages:** HTML/CSS/JavaScript

    Based both Front-end and Back-end in MERN stack.

- **Frameworks:** Express.js

    Chosed because of ease of use, and simplicity.

- **Database:** Cloud based MongoDB

    Quick to setup and use.

- **Libraries:** 
    1. Mongoose: Used to manage MongoDB.
    2. Morgan: Used to be able to read DB returns.
    3. Nodemon: Used to handle modifications in the server without having to restart.
    4. Jsonwebtoken: Used to generate a JWT for authentification.
    5. bcrypt: Installed but not implemented, was to handle passwords.


- **Missing:** A local DB would be better to handle, but would require installation and deploy on the server.

## Functionalities

    The APP can handle all CRUD operations, for 3 different models. It does have token validation for all
    POST/PUT/DELETE calls and handles errors with a custom object.

- **The APP do:**
    1. Handles basic product functionalities, including filtering by id.
    2. Reads some stored brands, with predefined values, to add to each product.
    3. Handles basic user functionalities, including token authentification.
    4. Can validate a token before letting anyone use POST/DELETE/PUT.
    5. Have stored custom message for most errors, returning they into an object for easy access in the client.

## Architecture

    The APP is divided into:

    ```mermaid
    graph LR
    A[root] --> B[src] --> D[controllers]
    A --> C[public] --> G[img]
    B --> E[libs]
    B --> F[messages]
    B --> F[middleware]
    B --> F[models]
    B --> F[routes]
    ```

- **root:** Contains package data, settings and this readme.
- **src:** Contains index.js and app.js to handle APP loading. Contains database connection script.
- **public:** Contains main page.
- **img:** Contains favicon.
- **controllers:** Contains folders for each category, with sepparated controller functions.
- **libs:** Contains pagination.
- **messages:** Contains message objects.
- **middleware:** Contains JWT middleware fucntion.
- **models:** Contains APP models.
- **routes:** Contains routing functions.

## To-Do List

    Many features are lacking, as they would take time and there was not enough to implement then.

- **Query:** Adding query compatibility to all the controllers.
- **Filters:** Adding query would allow to do better filtering server based.
- **Encrypted Password:** Adding security to password handling.
- **Endpoint Optimization:** Endpoint optimization would allow to have better functionalities having to
use less endpoints. This does require Query compatibility.
- **Testing:** Lots of testing to be done to check every single error message and return.

## How to run it

    Create a new folder, and do run:
    > npm run dev
    To run it as a developer locally
    > npm run build
    To build it for production
    > npm start
    To start it in production

## Deploy

    APP is deployed in Heroku, doesn't need to do a production build.