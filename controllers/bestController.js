/* eslint-disable */

const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Employee = require('../models/employeeModels');

router.get('/', (req, res) => {
  res.render('management/mainLayout', {
    viewTitle: 'Manage Your Data',
  });
});

router.post('/', (req, res) => {
  if (
    req.body._id === undefined ||
    req.body._id === '' ||
    req.body._id === 'undefined'
  ) {
    insertRecord(req, res);
  } else {
    updateRecord(req, res);
  }
});

function insertRecord(req, res) {
  var employee = new Employee();
  employee.fullName = req.body.fullName;
  employee.email = req.body.email;
  employee.mobile = req.body.mobile;
  employee.city = req.body.city;
  employee.description = req.body.description;
  employee.save((err, doc) => {
    if (!err) {
      res.redirect('employee/list');
    } else {
      if (err.name === 'ValidationError') {
        handleValidationError(err, req.body);
        res.render('management/mainLayout', {
          viewTitle: 'Inserting Data',
          employee: req.body,
        });
      } else {
        console.log('Error during data insertion: ' + err);
      }
    }
  });
}
function updateRecord(req, res) {
  Employee.findOneAndUpdate(
    { _id: req.body._id },
    req.body,
    { new: true },
    (err, doc) => {
      if (!err) {
        res.redirect('employee/list');
      } else {
        if (err.name == 'ValidationError') {
          handleValidationError(err, req.body);
          res.render('management/mainLayout', {
            viewTitle: 'Update data',
            employee: req.body,
          });
        } else console.log('Error during record update : ' + err);
      }
    }
  );
}

router.get('/list', (req, res) => {
  Employee.find((err, docs) => {
    if (!err) {
      res.render('management/list', {
        list: docs,
      });
    } else console.log('Error in retrieving employee list: ' + err);
  });
});

function handleValidationError(err, body) {
  for (field in err.errors) {
    switch (err.errors[field].path) {
      case 'fullName':
        body['fullNameError'] = err.errors[field].message;
        break;
      case 'email':
        body['emailError'] = err.errors[field].message;
        break;
      default:
        break;
    }
  }
}

router.get('/:id', (req, res) => {
  Employee.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render('management/mainLayout', {
        viewTitle: 'Update Employee',
        employee: doc,
      });
    }
  });
});

router.get('/delete/:id', (req, res) => {
  Employee.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect('/employee/list');
    } else console.log('Error in employee delete: ' + err.message);
  });
});

module.exports = router;
