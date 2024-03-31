 // Importing important packages
 const express = require('express');
 
 // Using express and routes
 const app = express();
 const employeeRoute = express.Router();
 
 // Employee module which is required and imported
 let employeeModel = require('../model/Employee');
 
 // To Get List Of Employees
 employeeRoute.route('/').get(async function (req, res) {
    try {
      const employees = await employeeModel.find();
      res.json(employees);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
 
 // To Add New Employee
 employeeRoute.route('/addEmployee').post(function (req, res) {
 let employee = new employeeModel(req.body);
 employee.save()
 .then(game => {
 res.status(200).json({ 'employee': 'Employee Added Successfully' });
 })
 .catch(err => {
 res.status(400).send("Something Went Wrong");
 });
 });
 
 // To Get Employee Details By Employee ID
 employeeRoute.route('/editEmployee/:id').get(async function (req, res) {
    try {
      let id = req.params.id;
      const employee = await employeeModel.findById(id);
      res.json(employee);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
 
 // To Update The Employee Details
 employeeRoute.route('/updateEmployee/:id').post(async function (req, res) {
    try {
      const employee = await employeeModel.findByIdAndUpdate(req.params.id).exec(); // Add .exec() to execute the query
      
      if (!employee)
        throw new Error('Unable To Find Employee With This Id');
  
      employee.firstName = req.body.firstName;
      employee.lastName = req.body.lastName;
      employee.email = req.body.email;
      employee.phone = req.body.phone;
  
      await employee.save();
  
      res.json('Employee Updated Successfully');
    } catch (err) {
      console.error(err);
      res.status(400).send("Unable To Update Employee");
    }
  });

  
 
 // To Delete The Employee
 employeeRoute.route('/deleteEmployee/:id').get(async function (req, res) {
    try {
        const employee = await employeeModel.findByIdAndDelete(req.params.id);
        if (!employee)
            throw new Error('Unable to find employee with this ID');

        res.json('Employee deleted successfully');
    } catch (err) {
        console.error(err);
        res.status(400).send("Unable to delete employee");
    }
});

 
 module.exports = employeeRoute;
