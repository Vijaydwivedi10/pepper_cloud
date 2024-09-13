import React, { useState, useEffect } from 'react';
import { getFormById, submitFormResponse } from '../utils/api';
import { useParams } from 'react-router-dom';

const FormView = () => {
    const { id } = useParams();
    const [form, setForm] = useState(null);
    const [response, setResponse] = useState({});

    useEffect(() => {
        const fetchForm = async () => {
            const { data } = await getFormById(id);
            setForm(data);
        };

        fetchForm();
    }, [id]);

    const handleChange = (e, inputTitle) => {
        setResponse({ ...response, [inputTitle]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await submitFormResponse(id, response);
        alert('Response submitted!');
    };

    return (
        <div>
            {form && (
                <>
                    <h1>{form.title}</h1>
                    <form onSubmit={handleSubmit}>
                        {form.inputs.map((input, index) => (
                            <div key={index}>
                                <label>{input.title}:</label>
                                <input
                                    type={input.inputType}
                                    placeholder={input.placeholder}
                                    onChange={(e) => handleChange(e, input.title)}
                                    required={input.isRequired}
                                />
                            </div>
                        ))}
                        <button type="submit">Submit</button>
                    </form>
                </>
            )}
        </div>
    );
};

export default FormView;
