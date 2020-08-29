/* eslint-disable */
import '@babel/polyfill';
import { displayMap } from './mapbox';
import { login, logout, signup } from './login';
import { updateSettings } from './updateSettings';
import { insertData } from './insertData';
import { bookTour } from './stripe';

// DOM ELEMENTS
const mapBox = document.getElementById('map');
const loginForm = document.querySelector('.form--login');
const logOutBtn = document.querySelector('.nav__el--logout');
const userDataForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-password');
const bookBtn = document.getElementById('book-tour');
const signUpForm = document.querySelector('.form--signup');
const insertDatas = document.querySelector('.insert-data');
const deleteBtn = document.querySelector('.siba-data');
const editBtn = document.querySelector('.edit-data');
// VALUES

// DELEGATION
if (mapBox) {
	const locations = JSON.parse(mapBox.dataset.locations);

	displayMap(locations);
}

if (loginForm) {
	loginForm.addEventListener('submit', (e) => {
		e.preventDefault();
		const email = document.getElementById('email').value;
		const password = document.getElementById('password').value;
		login(email, password);
	});
}

if (logOutBtn) logOutBtn.addEventListener('click', logout);
// if (deleteBtn) {
// 	deleteBtn.addEventListener('click', (req, res) => {
// 		console.log('delete Btn available....');
// 		console.log(req.body);
// 	});
// }

if (signUpForm) {
	signUpForm.addEventListener('submit', (e) => {
		e.preventDefault();
		const name = document.getElementById('name').value;
		const email = document.getElementById('email').value;
		const password = document.getElementById('password').value;
		const passwordConfirm = document.getElementById('password-confirm').value;
		signup(name, email, password, passwordConfirm);
	});
}
if (insertDatas) {
	insertDatas.addEventListener('submit', (e) => {
		e.preventDefault();
		const name = document.getElementById('name').value;
		const imageCover = document.getElementById('imagecover').value;
		const summary = document.getElementById('summary').value;
		const description = document.getElementById('description').value;
		const images = document.getElementById('images').value;
		const cost = document.getElementById('cost').value;
		const locations = document.getElementById('locations').value;
		const Nationality = document.getElementById('nationality').value;
		const videolink = document.getElementById('videolink').value;
		insertData(name, summary, description, imageCover, images, cost, locations, Nationality, videolink);
		console.log(name, imageCover, images, summary, description, cost, locations, Nationality, videolink);
	});
}

if (userDataForm) {
	userDataForm.addEventListener('submit', (e) => {
		e.preventDefault();
		const form = new FormData();
		form.append('name', document.getElementById('name').value);
		form.append('email', document.getElementById('email').value);
		form.append('photo', document.getElementById('photo').files[0]);
		console.log(form);

		updateSettings(form, 'data');
	});
}
if (userPasswordForm) {
	userPasswordForm.addEventListener('submit', async (e) => {
		e.preventDefault();
		document.querySelector('.btn--save-password').textContent = 'Updating...';

		const passwordCurrent = document.getElementById('password-current').value;
		const password = document.getElementById('password').value;
		const passwordConfirm = document.getElementById('password-confirm').value;
		await updateSettings({ passwordCurrent, password, passwordConfirm }, 'password');

		document.querySelector('.btn--save-password').textContent = 'Save password';
		document.getElementById('password-current').value = '';
		document.getElementById('password').value = '';
		document.getElementById('password-confirm').value = '';
	});
}

if (bookBtn) {
	bookBtn.addEventListener('click', (e) => {
		e.target.textContent = 'Processing...';
		const { tourId } = e.target.dataset;
		bookTour(tourId);
	});
}
