config->dbConnection.js : try catch block with connection string to connect with the mongodb data base, console host and name 
  Moongose-object model design schema like contacts or user
  Helps us communicat with our database like mongoDB (npm i mongoose)

Controllers-> 
  contactController.js : after the user is logged in get(GET), create(POST), update(POST), delete(DEL) contact private(access token) methoeds are defined with async, req.body checks with try and error catch.
  userController.js : bcrypt for encryptin the user password end to end, jsonwebtoken(jwt) used for access token, Register, login, current user methods are defined.

middleware->
  errorHandler.js : error handler methons with all the server errors are defined here 
  validateTokenHandler.js : 
