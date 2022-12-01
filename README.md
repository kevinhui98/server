# server-starter-code

This repository is the server (back-end) starter code for Final Project (CRUD Application).

### Prerequisites
- Install PostgreSQL (Postgres) [[link](https://www.postgresql.org/download/)] - required to run the database
- Install Postman [[link](https://www.postman.com/downloads/)] - optional tool for API testing 

### Use the following steps to set up and run the server (back-end) application on your local machine
1.	Download the GitHub repository ZIP file to your local machine and unzip it.
2. Start a terminal (e.g., Git Bash) on your local machine.
3.	Go into the "sever-starter-code" folder, enter the command to install dependencies: `npm install` 
4.	Start the server application by entering the command: `npm start` 
5.	After the server application is successfully started, its access address is at: `http://localhost:5000` 

As a user, I:
Home Page View

[x] will land on a visually pleasing home page by default, which allows navigation to view all campuses and all students

# Technical Requirements and Functionalities
## All Campuses and All Students 
### Database (Sequelize) – back-end application
- [ ] Write a "campus" model with the following information:  
  - [x] name - not allow null/empty
  - [x] address - not allow null/empty
  - [x] description - large text string, allow null/empty
  - [x] imageUrl - with a default value, allow null/empty
- [ ] Write a "student" model with the following information: 
  - [x] firstName - not allow null/empty
  - [x] lastName - not allow null/empty
  - [x] email - not allow null/empty
  - [x] imageUrl - with a default value, allow null/empty
  - [ ] gpa - decimal between 0.0 and 4.0, allow null/empty
 - [x] Student may be associated with at most one campus
 - [x] Campus may be associated with many students
### API/Server-Side Routing (Express, Sequelize) – back-end application
- [ ] Write a route to serve up all students
- [ ] Write a route to serve up all campuses
### API/Server-Side Routing (Express, Sequelize) – back-end application
- [ ] Write a route to serve up a single campus (based on the campus id), including that campus's students
- [ ] Write a route to serve up a single student (based on the student id), including that student's campus
## Adding a Campus and Adding a Student
### API/Server-Side Routing (Express, Sequelize) – back-end application
- [ ] Write a route to add a new campus
- [x] Write a route to add a new student
## Editing a Campus and Editing a Student 
### API/Server-Side Routing (Express, Sequelize) – back-end application
- [ ] Write a route to edit a campus (based on the campus id)
- [ ] Write a route to edit a student (based on the student id)
## Deleting a Campus and Deleting a Student
### API/Server-Side Routing (Express, Sequelize) – back-end application
- [ ] Write a route to delete a campus (based on the campus id)
- [x] Write a route to delete a student (based on the student id)
