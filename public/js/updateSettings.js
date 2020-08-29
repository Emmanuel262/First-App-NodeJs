/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alerts';

// type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
	try {
		const url =
			type === 'password'
				? 'http://127.0.0.1:8000/api/v1/users/updateMyPassword'
				: 'http://127.0.0.1:8000/api/v1/users/updateMe';
		const res = await axios({
			method: 'PATCH',
			url,
			data
		});
		console.log(data);
		if (res.data.status === 'success') {
			showAlert('success', `${type.toUpperCase()} updated successfully!`);
		}
	} catch (err) {
		showAlert('error', err.response.data.message);
	}
};

export const updateDataNeeded = async (data, id) => {
	try {
		const res = await axios({
			method: 'PATCH',
			url: `http://127.0.0.1:8000/api/v1/amazu/${id}`,
			data
		});
		console.log(data);
		if (res.data.status === 'success') {
			showAlert('success', 'Data updated successfully!');
		}
	} catch (err) {
		showAlert('error', err.response.data.message);
	}
};
