const Form = require('../models/formModel');

// Create a new form
const createForm = async (req, res) => {
    const { title, inputs } = req.body;

    if (!title || !inputs) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    const form = new Form({
        title,
        inputs
    });

    try {
        await form.save();
        res.status(201).json(form);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all forms
const getForms = async (req, res) => {
    try {
        const forms = await Form.find();
        res.json(forms);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get form by ID
const getFormById = async (req, res) => {
    const { id } = req.params;

    try {
        const form = await Form.findById(id);
        if (!form) return res.status(404).json({ message: 'Form not found' });
        res.json(form);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update form
const updateForm = async (req, res) => {
    const { id } = req.params;
    const { title, inputs } = req.body;

    try {
        const updatedForm = await Form.findByIdAndUpdate(id, { title, inputs }, { new: true });
        if (!updatedForm) return res.status(404).json({ message: 'Form not found' });
        res.json(updatedForm);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Save form response
const saveFormResponse = async (req, res) => {
    const { id } = req.params;
    const { response } = req.body;

    try {
        const form = await Form.findById(id);
        if (!form) return res.status(404).json({ message: 'Form not found' });

        form.responses.push(response);
        await form.save();
        res.json(form);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get form responses
const getFormResponses = async (req, res) => {
    const { id } = req.params;

    try {
        const form = await Form.findById(id);
        if (!form) return res.status(404).json({ message: 'Form not found' });
        res.json(form.responses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createForm,
    getForms,
    getFormById,
    updateForm,
    saveFormResponse,
    getFormResponses
};
