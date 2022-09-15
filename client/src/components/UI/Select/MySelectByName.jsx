import React from 'react';
import Form from 'react-bootstrap/Form';

const MySelectByName = ({options, defaultValue, value, onChange}) => {
    return (
        <Form.Select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.id} value={option.id}>
                    {option.surname + " " + option.name}
                </option>
            )}
        </Form.Select>
    );
};

export default MySelectByName;