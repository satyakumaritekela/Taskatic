##Assignment 4

This assignment 4 consists of the frontend and backend development of CSCI 5709 web group project.Out of all features, in this assignment I am implementing User profile management feature. This implementation includes the front end and back end development and integration.


@Author : # Vali Shaik

#Email : vl216084@dal.ca

Date: 25th July 2020

##Github Link

https://github.com/satyakumaritekela/Taskatic

##Heroku Link

https://taskatic.herokuapp.com/


##Getting Started

•	Clone the repository from the GitHub link provided below
•	Go to path where package.json is located open the command prompt
•	Install the node modules using the following command npm run dev
•	Start the react application by using the following command npm start


##Prerequisites
It requires NodeJS to be installed on the system.

##Built with

•React: It is a JavaScript view library to develop frontend. It helps us to create attractive single page applications.

•Visual Studio code: It is a code-editor to built, debug web, and cloud-based applications.

•Node.js: Open-source, cross-platform, java script runtime environment.

•Express: It is a web application framework for Node.js for the development of backend, that handles all the interactions between the frontend and database ensuring a smooth transfer of data to the end user.

•MongoDb: It is a cross-platform document-oriented database program, which uses JSON like documents with optional schemas.

•Firebase: Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users of our app. 

##Deployment
App is deployed in heroku with automatic deploys from the github repository. On making the git commit build gets made and branch is deployed to the server



###Front end

As part of implementing User management, below UI pages are designed in assignment 3 and can be found in below path of the project folder.

#Login.js

The login screen is designed to allow an existing user to sign in into the application. User needs
to authenticate by providing a valid username and password. User inputs are validated for nonempty
checks.

Taskatic/client/src/Components/Login

#Register.js

Register page in designed to allow a new user to sign up with the application. To register
with the Taskatic application, the user needs to provide all the mandatory fields. Various
text validations are performed over the user inputs. Once the validations are passed, an
account is created for the given user details.

Taskatic/client/src/Components/SignUp

#ForgotPassword.js

This page is used to reset the password of an existing user.

Taskatic/client/src/Components/ForgotPassword

#Profile.js

By navigating to this page, the user will be able to see personal details such as email id,
designation, address. If the user wants to change any of those details, user can edit the
details directly and click on the ‘Save Details’ button.

Taskatic/client/src/Components/Profile

###Back end

Below are the files developed in back end for profile management implemtation.

User.js
UserController.js
UserRoutes.js



#User Authentication
For user management implementation, I referred to google firebase user guide and used google firebase authentication as a backend service. Firebase stores all the user's implementation. It also provides various services for SignIn ,Register, Password reset functionalities.

Firebase config: Containing all Keys to connect to firebase

Firebase login service : signInWithEmailAndPassword(email, password)
Firebase Register service : createUserWithEmailAndPassword(email, password)
Firebase Forgot password service : signInWithEmailAndPassword(email, password)
Firebase user details service: firebase.auth().currentUser

firebase.config.js
===================
Contains API keys, Project Id, application ID to connect to application

#Profile management

For mainting the user profile details, I have implemented REST API using node js. User details are stored in Mongo DB. Our application consumes these API's for maintaining and manipulating applicationuser details. For these API implementation I reused the developed code in group tutorials.

Controller is a directory which contains our all of our routes Controller to navigate to different component. For mainting User profiles UserController is developed containg all the request mappings of API.

UserController.js
==================

This file is responsible for making changes to the existing user or adding new user. This file has functions which responsible for fetching all users, getting new user detail, modify new user, and add new user to the database.

User.js
========

User model is present in models/ folder.This file contains the model of the User entity.

##API URL

Find user by user name : "<path>/user/getUser/<userId>"

Add user : "<path>/user/addUser"

Update user : "<path>/user/modifyUser/<userId>"


###Integration:

To integrate Front end with Back end, firstly for user authentication I installed firebase sdk module by using command "npm install firebase". This downloads the SDK and backend service libraries. For every user created in google firebase, an unquie ID is generated, using this unique ID user profile details are stored in Mongo DB for the respective ID.

For Login I referred google firebase guide and consumed login service.

Code
=====
Used in Login.js 

firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((res) => {
              if (res.user) {
                //On successful login, fetching user properties and setting it to Context
                firebase.auth().onAuthStateChanged(function (user) {
                  if (user) {
                    // User is signed in.
                    setUser(user.displayName);
                  } else {
                    // No user is signed in.
                  }
                });
                Auth.setLoggedIn(true);
                loginShow(false);
                //Displaying home page to the user
                history.push("/home");
              }
            
Register Service:

Code
=====
Used in Register.js 

firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          //Once sign up is successfull, user properties are updated
          var user = firebase.auth().currentUser;
          user
            .updateProfile({
              displayName: name,
            })
            .then(function () {
              //Saving user details in DB
              axios
                .post("/user/addUser", {
                  id: user.uid,
                  userName: name,
                  email: email,
                  jobTitle: "Software Dev",
                  department: "Research",
                  organisation: "Dalhousie",
                  country: "Canada",
                })
                .then((response) => {
                  alert("Sign up is successful, please login");
                })


Fetch User details:

Code
=====
Used in Profile.js

firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        console.log("Current signed after refresh", user.uid);
        setUserId(user.uid);
      } else {
        // No user is signed in.
      }
    });



###API Calls

The Id from firebase current user is mapped with user profile details and stored in DB.Below is the code used to fetch data from Mongo DB and populate on UI.

Add User details
==================
Used in Register.js

 axios
                .post("/user/addUser", {
                  id: user.uid,
                  userName: name,
                  email: email,
                  jobTitle: "Software Dev",
                  department: "Research",
                  organisation: "Dalhousie",
                  country: "Canada",
                })



Get user details
==================
Used in Profile.js

 axios
      .get(`/user/getUser/${userId}`)
      .then((response) => {
        const userData = response.data.data[0];
        setName(userData.userName);
        setJobTitle(userData.jobTitle);
        setYourDepartment(userData.department);
        setYourOrganization(userData.organisation);
        setEmail(userData.email);
        setYourLocation(userData.country);
      })


Tools Used:
===========
Postman tool is used to test API's developed using Node js.
Mongo Compass tool is and Visual GUI tool used to view the data present in Mongo DB.

###References
1.Google Firebase user guide https://firebase.google.com/docs/auth/web/start
2. Mongo Compass user guide https://www.mongodb.com/products/compass
