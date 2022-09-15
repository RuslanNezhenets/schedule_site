import React from 'react';
import Form from 'react-bootstrap/Form';

const MySelectByTitle = ({options, defaultValue, value, onChange}) => {
    return (
        <Form.Select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.id} value={option.id}>
                    {option.title}
                </option>
            )}
        </Form.Select>
    );
};

export default MySelectByTitle;