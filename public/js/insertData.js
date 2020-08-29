/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const insertData = async (
  name,
  summary,
  description,
  imageCover,
  images,
  cost,
  locations,
  nationality,
  vieoLink
) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/v1/amazu',
      data: {
        name,
        summary,
        description,
        imageCover,
        images,
        cost,
        locations,
        nationality,
        vieoLink,
      },
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Data inserted successfully!');
      window.setTimeout(() => {
        location.assign('/ihaho/test-amazu-crud/list');
      }, 2000);
    }
  } catch (err) {
    showAlert('err', err.response.data.message);
  }
};

export const deleteData = async (id) => {
  try {
    const res = await axios({
      method: 'DELETE',
      url: `http://127.0.0.1:8000/api/v1/amazu/${id}`,
    });
    if (res.status === 'success') {
      showAlert('success', 'Data deleted successfully!');
    }
  } catch (err) {
    showAlert('error', err.response.data.messasge);
  }
};
