import React, { useState, useEffect } from 'react';
import { getForms } from '../utils/api';
import { Link } from 'react-router-dom';

const FormList = () => {
    const [forms, setForms] = useState([]);

    useEffect(() => {
        const fetchForms = async () => {
            const response = await getForms();
            setForms(response.data);
        };

        fetchForms();
    }, []);

    return (
        <div>
            <h1>All Forms</h1>
            <Link to="/form/create">
                <button>Create New Form</button>
            </Link>
            <ul>
                {forms.map((form) => (
                    <li key={form._id}>
                        <Link to={`/form/${form._id}`}>{form.title}</Link>
                        <Link to={`/form/${form._id}/edit`}>Edit</Link>
                        <Link to={`/form/${form._id}/response`}>View Responses</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FormList;
