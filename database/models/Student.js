/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gpa: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
    allowNull: true
  }

});

// Export the student model
module.exports = Student;