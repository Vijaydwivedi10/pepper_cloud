import React, { useState, useEffect } from 'react';
import { getFormResponses } from '../utils/api';
import { useParams } from 'react-router-dom';

const FormResponses = () => {
    const { id } = useParams();
    const [responses, setResponses] = useState([]);

    useEffect(() => {
        const fetchResponses = async () => {
            const { data } = await getFormResponses(id);
            setResponses(data);
        };

        fetchResponses();
    }, [id]);

    return (
        <div>
            <h1>Form Responses</h1>
            {responses.length === 0 ? (
                <p>No responses yet</p>
            ) : (
                <ul>
                    {responses.map((response, index) => (
                        <li key={index}>
                            {Object.keys(response).map((key) => (
                                <div key={key}>
                                    <strong>{key}: </strong> {response[key]}
                                </div>
                            ))}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FormResponses;
