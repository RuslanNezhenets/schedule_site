import React, {useContext} from 'react';
import Form from 'react-bootstrap/Form';
import {Context} from "../../../index";

const MySelectType = ({options, value, onChange}) => {
    const {schedule} = useContext(Context)

    return (
        <Form.Select
            value={value}
            onChange={event => onChange(parseInt(event.target.value))}
        >
            {value && <option value={value}>{schedule.searchType(value) &&
                schedule.searchType(value).title}</option>}
            {options.map(option => {
                    return (
                        option.id !== value &&
                        <option key={option.id} value={option.id}>
                            {option.title}
                        </option>
                    )
                }
            )}

        </Form.Select>
    );
};

export default MySelectType;