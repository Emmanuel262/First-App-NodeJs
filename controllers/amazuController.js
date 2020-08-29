/* eslint-disable */

const Amazu = require('../models/amazuModel');
const factory = require('./handlerFactory');
const viewHandlerController = require('./viewHandlerController');

exports.amazuYose = factory.getAll(Amazu);
exports.inzuImwe = factory.getOne(Amazu, { path: 'reviews' });
exports.remaInzu = factory.createOne(Amazu);
exports.hinduraInzu = factory.updateOne(Amazu);
exports.sibaInzu = factory.deleteOne(Amazu);

// exports.goGetForm = (req, res) => {
//   res.render('management/mainLayout', {
//     viewTitle: 'Manage Your Data',
//   });
// };

// exports.updateData = (req, res) => {
//   if (
//     req.body._id === undefined ||
//     req.body._id === '' ||
//     req.body._id === 'undefined'
//   ) {
//     insertRecord(req, res);
//     console.log('inserting...');
//   } else {
//     updateRecord(req, res);
//     console.log('updating...');
//   }
// };

// function insertRecord(req, res) {
//   var employee = new Amazu();
//   employee.fullName = req.body.fullName;
//   employee.imageCover = req.body.imageCover;
//   employee.description = req.body.description;
//   employee.summary = req.body.summary;
//   employee.images = req.body.images;
//   employee.Cost = req.body.Cost;
//   employee.locations = req.body.locations;
//   employee.Nationality = req.body.Nationality;
//   employee.save((err, doc) => {
//     if (!err) {
//       res.redirect('ihaho-amazu-detail/list');
//     } else {
//       if (err.name === 'ValidationError') {
//         handleValidationError(err, req.body);
//         res.render('management/mainLayout', {
//           viewTitle: 'Inserting Data',
//           employee: req.body,
//         });
//       } else {
//         console.log('Error during data insertion: ' + err);
//       }
//     }
//   });
// }

// function updateRecord(req, res) {
//   Amazu.findOneAndUpdate(
//     { _id: req.body._id },
//     req.body,
//     { new: true },
//     (err, doc) => {
//       if (!err) {
//         res.redirect('ihaho-amazu-detail/list');
//       } else {
//         if (err.name == 'ValidationError') {
//           handleValidationError(err, req.body);
//           res.render('management/mainLayout', {
//             viewTitle: 'Update data',
//             employee: req.body,
//           });
//         } else console.log('Error during record update : ' + err);
//       }
//     }
//   );
// }

// exports.getList = (req, res) => {
//   Amazu.find((err, docs) => {
//     if (!err) {
//       res.render('management/list', {
//         list: docs,
//       });
//     } else console.log('Error in retrieving employee list: ' + err);
//   });
// };

// function handleValidationError(err, body) {
//   for (field in err.errors) {
//     switch (err.errors[field].path) {
//       case 'fullName':
//         body['fullNameError'] = err.errors[field].message;
//         break;
//       case 'email':
//         body['emailError'] = err.errors[field].message;
//         break;
//       default:
//         break;
//     }
//   }
// }

// exports.updateOneData = (req, res) => {
//   Amazu.findById(req.params.id, (err, doc) => {
//     if (!err) {
//       res.render('management/mainLayout', {
//         viewTitle: 'Update Employee',
//         employee: doc,
//       });
//     }
//   });
// };

// exports.deleteOneData = (req, res) => {
//   Amazu.findByIdAndRemove(req.params.id, (err, doc) => {
//     if (!err) {
//       res.redirect('/ihaho-amazu-detail/list');
//     } else console.log('Error in employee delete: ' + err.message);
//   });
// };
