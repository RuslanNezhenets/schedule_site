import React, {useContext} from 'react';
import Form from 'react-bootstrap/Form';
import {Context} from "../../../index";

const MySelectByTitleDiscipline = ({options, value, onChange}) => {
    const {schedule} = useContext(Context)

    return (
        <div>
            <input list="datalistOptions" className="form-control" placeholder="Type to search..."
                   onChange={event => {
                       schedule.searchDisciplineByTitle(event.target.value) &&
                       onChange(schedule.searchDisciplineByTitle(event.target.value).id)
                   }
            }
            />
            <datalist id="datalistOptions">
            {value && <option>{schedule.searchDiscipline(value) &&
                schedule.searchDiscipline(value).title}</option>}
            {options.map(option => {
                    return (
                        option.id !== value &&
                        <option key={option.id} value={option.title}>
                            {/*{option.title}*/}
                        </option>
                    )
                }
            )}
            </datalist>
        </div>
    );
};

export default MySelectByTitleDiscipline;