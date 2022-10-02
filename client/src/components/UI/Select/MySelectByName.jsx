import React, {useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';

const MySelectByName = ({options, value, onChange, patronymic = false}) => {
    const [people, setPeople] = useState(null)

    useEffect(() => {
        setPeople(options.filter(people => people.id == value)[0])
    }, [value])

    return (
        <Form.Select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            {value && <option value="">{people && (
            patronymic ?
                people.surname + " " +
                people.name + " " +
                people.patronymic
                :
                people.surname + " " +
                people.name)
            }
            </option>}
            {options.map(option => {
                    return (
                        option.id != value &&
                        <option key={option.id} value={option.id}>
                            {patronymic
                                ?
                                option.surname + " " + option.name + " " + option.patronymic
                                :
                                option.surname + " " + option.name}
                        </option>
                    )
                }
            )}
        </Form.Select>
    );
};

export default MySelectByName;