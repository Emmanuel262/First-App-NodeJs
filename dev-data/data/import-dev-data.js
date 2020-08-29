/* eslint-disable */
const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../../models/tourModel');
const User = require('../../models/userModel');
const Review = require('../../models/reviewModel');
const Main = require('../../models/mainModel');

dotenv.config({ path: './config.env' });
// const app = require('./app');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false
	})
	.then(() => console.log('DB Connection successfull!'));

// READ JSON FILE
// const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`, 'utf-8'));
// const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));
// const reviews = JSON.parse(fs.readFileSync(`${__dirname}/reviews.json`, 'utf-8'));
const mains = JSON.parse(fs.readFileSync(`${__dirname}/list.json`, 'utf-8'));

// IMPORT DATA INTO DB
const importData = async () => {
	try {
		// await Tour.create(tours);
		// await User.create(users, { validateBeforeSave: false });
		// await Review.create(reviews);
		await Main.create(mains);
		console.log('Data successful loaded!');
		process.exit();
	} catch (err) {
		console.log(err);
	}
};

const deleteData = async () => {
	try {
		// await Tour.deleteMany();
		// await User.deleteMany();
		// await Review.deleteMany();
		await Main.deleteMany();
		console.log('Data successful deleted!');
		process.exit();
	} catch (err) {
		console.log(err);
	}
};

if (process.argv[2] === '--import') {
	importData();
} else if (process.argv[2] === '--delete') {
	deleteData();
}
