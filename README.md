Chitter Challenge
##  >> [Visit the app here:] (https://mardel-chitter.netlify.app/) <<

=================

Chitter is a full-stack application that is a take on the Twitter app. It allows the user to register and login with authentication, post 'peeps' and favourite them. 

<img width="1509" alt="image" src="https://github.com/mardeldev/chitter-challenge/assets/73969781/2ebe8e05-9709-418d-8f34-5e2ff967ff59">


## Description
For this application, I used the MERN stack of technologies among others, which include:
### Backend: 
- Node.js
- Express.js
- MongoDB
- Mongoose
- Express-validator
- JWT (JSON Web Tokens)

### Frontend
- React
- Axios

### Utility and Middleware
- CORS (Cross-Origin Resource Sharing)

### Dev Tools and Other Utilities
- NPM

# Installation
- Clone this repo
- Navigate to the Fackend folder and run
```
npm i
```
- Navigate to the Backend folder and run
```
npm i
```
- Open a browser and navigate to `http://localhost:5173`.
- You should now be able to try the app for yourself!

- If you do not want to signup to try the app, you can use the following credentials to login:
  ```
  username: janedoe
  password: password
  ```

# Project Planning Documentation
### Layer Diagram
![image](https://github.com/mardeldev/chitter-challenge/assets/73969781/c1f298a6-5a10-4655-bf49-3b802a240f4d)

### Component Diagram
![image](https://github.com/mardeldev/chitter-challenge/assets/73969781/9256435d-a99c-4e3b-8a6a-f056725dcb41)


# Testing
I have included testing on the client side to ensure the appropriate calls are made. Unfortunately, I did not have enough time to fully test the server side. Throughout the writing of this app, however, I implemented several layers of validation, and I plan to achieve full test coverage when I am able to dedicate more time to the app.

### Standard Acceptance Criteria
```
As a trainee software engineer
So that I can let people know what I am doing  
I want to post a message (peep) to chitter

As a trainee
So that I can see what others are saying  
I want to see all peeps in reverse chronological order

As a trainee
So that I can better appreciate the context of a peep
I want to see the time at which it was made

As a trainee
So that I can post messages on Chitter as me
I want to sign up for Chitter

As a trainee
So that only I can post messages on Chitter as me
I want to log in to Chitter

As a trainee
So that I can avoid others posting messages on Chitter as me
I want to log out of Chitter
```

