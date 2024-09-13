const mongoose = require('mongoose');

const formInputSchema = new mongoose.Schema({
    inputType: { type: String, required: true },
    title: { type: String, required: true },
    placeholder: { type: String },
    options: { type: [String] }, // in case of dropdowns, radios, etc.
    isRequired: { type: Boolean, default: false }
});

const formSchema = new mongoose.Schema({
    title: { type: String, required: true },
    inputs: [formInputSchema],
    responses: [{ type: Object, default: [] }],
    createdAt: { type: Date, default: Date.now }
});

const Form = mongoose.model('Form', formSchema);
module.exports = Form;
