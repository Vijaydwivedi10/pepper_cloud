import axios from 'axios';

const API_URL = 'http://localhost:5000/api/forms';

// Create Form
export const createForm = async (form) => {
    return await axios.post(`${API_URL}/create`, form);
};

// Get all forms
export const getForms = async () => {
    return await axios.get(`${API_URL}`);
};

// Get form by ID
export const getFormById = async (id) => {
    return await axios.get(`${API_URL}/${id}`);
};

// Edit form
export const editForm = async (id, form) => {
    return await axios.put(`${API_URL}/${id}/edit`, form);
};

// Submit form response
export const submitFormResponse = async (id, response) => {
    return await axios.post(`${API_URL}/${id}/response`, response);
};

// Get form responses
export const getFormResponses = async (id) => {
    return await axios.get(`${API_URL}/${id}/response`);
};
