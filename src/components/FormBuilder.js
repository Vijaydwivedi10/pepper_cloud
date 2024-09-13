import React, { useState } from 'react';
import { createForm } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const FormBuilder = () => {
  const [title, setTitle] = useState('');
  const [inputs, setInputs] = useState([]);
  const [inputType, setInputType] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const navigate = useNavigate();

  const addInput = () => {
    if (inputs.length >= 20) {
      alert("Maximum 20 inputs allowed");
      return;
    }

    const newInput = {
      inputType,
      title: inputTitle,
      placeholder
    };
    setInputs([...inputs, newInput]);
    setInputType('');
    setInputTitle('');
    setPlaceholder('');
  };

  const removeInput = (index) => {
    setInputs(inputs.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || inputs.length === 0) {
      alert("Title and at least one input are required");
      return;
    }

    const form = {
      title,
      inputs
    };
    await createForm(form);
    navigate('/'); // Redirect to homepage after successful form creation
  };

  return (
    <div>
      <h1>Create New Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Form Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <h3>Add Input:</h3>
          <label>Input Type:</label>
          <select
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
          >
            <option value="">Select Type</option>
            <option value="text">Text</option>
            <option value="email">Email</option>
            <option value="password">Password</option>
            <option value="number">Number</option>
            <option   
 value="date">Date</option>   

          </select>

          <label>Input Title:</label>
          <input
            type="text"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
          />

          <label>Placeholder:</label>
          <input
            type="text"
            value={placeholder}
            onChange={(e) => setPlaceholder(e.target.value)}
          />

          <button type="button" onClick={addInput}>
            Add Input
          </button>
        </div>
        <div>
          <h3>Form Preview:</h3>
          <table>
            <tbody>
              {inputs.map((input, index) => (
                <tr key={index}>
                  <td>{input.title}</td>
                  <td>{input.inputType}</td>
                  <td>{input.placeholder}</td>
                  <td>
                    <button type="button" onClick={() => removeInput(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button type="submit">Save Form</button>
      </form>
    </div>
  );
};

export default FormBuilder;