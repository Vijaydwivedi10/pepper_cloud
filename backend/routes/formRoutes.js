const express = require('express');
const router = express.Router();
const {
    createForm,
    getForms,
    getFormById,
    updateForm,
    saveFormResponse,
    getFormResponses
} = require('../controllers/formController');

// Create a new form
router.post('/create', createForm);

// Get all forms
router.get('/', getForms);

// Get a specific form by ID
router.get('/:id', getFormById);

// Update form by ID
router.put('/:id/edit', updateForm);

// Save a form response
router.post('/:id/response', saveFormResponse);

// Get form responses
router.get('/:id/response', getFormResponses);

module.exports = router;
