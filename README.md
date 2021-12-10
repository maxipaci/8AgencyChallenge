# 8agency's challenge
Currently deployed on https://61b2da960619ce96746a3f1b--ecstatic-franklin-fb0c23.netlify.app/
## Backend
The Express js API of the project its located under the ./Backend directory.
### Setup
First of all, you need to install Node js in your machine including npm.

Under the route ./Backend run the command 'npm install' to install the dependencies.

Then you need to setup your configuration in the .env file located under the ./Backend/ directory with the following config:<br/>
>>PORT=[API PORT]<br/>
    DB_NAME=[DATABASE NAME]<br/>
    DB_USER=[DATABASE USER]<br/>
    DB_PASSWORD=[DATABASE PASSWORD]<br/>
    DB_PORT=[DATABASE PORT]<br/>
    DB_HOST=[DATABASE HOST]<br/>
    DB_TYPE=[DB IMPLEMENTATION TYPE]<br/>

This API use a mysql database, if you don't want to set up a mysql server you can just simply set DB_TYPE variable to 'inmemory' (without the quotation marks). This will make the api use a 'in memory' database without needing configuration.

If you want yo use a mysql database you have to set DB_TYPE variable to 'sequelize' (without the quotation marks) and run the following commands under the  ./Backend directory once you have your configuration setted up:
>>npx sequelize-cli db:create<br/>
npx sequelize-cli db:migrate</br>
npx sequelize-cli db:seed:all

This will create the database, the tables and load test data.

### Run
To run the API just run the command 'npm start' under the ./Backend directory.

### Testing
'npm run test' will run the unit tests.

## Frontend
The react app of the project its located under the ./frontend directory.

### Setup
run the following command under the ./frontend directory: 'npm install' to install the dependencies.

The default BASE URL API is http://127.0.0.1:5000/, if you want to change it, just create a .env file under the ./frontend directory and set a variable called REACT_APP_BASE_URL with your custom BASE URL.

### Run
To run the react app just run the command 'npm start' under the ./frontend directory and the app will run  on your localhost under the port 3000.
