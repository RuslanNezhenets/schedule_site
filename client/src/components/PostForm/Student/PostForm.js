import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import MyInput from "../../UI/MyInput/MyInput";
import {createStudent} from "../../../http/scheduleApi";

const PostForm = ({create}) => {
    const [student, setStudent] = useState({surname: '', name: '', patronymic: '', telegramId: ''})
    const [error, setError] = useState('')

    const addNewTeacher = async (e) => {
        e.preventDefault()

        try {
            await createStudent(student)
            create(student)
            setStudent({surname: '', name: '', patronymic: '', telegramId: ''})
        } catch (e) {
            setError(e.response.data.message)
        }
    }

    return (
        <form className="text-end">
            <div className="error">{error}</div>
            <MyInput
                type="text"
                placeholder="Фамилия"
                value={student.surname}
                onChange={e => setStudent({...student, surname: e.target.value})}
            />
            <MyInput
                type="text"
                placeholder="Имя"
                value={student.name}
                onChange={e => setStudent({...student, name: e.target.value})}
            />
            <MyInput
                type="text"
                placeholder="Отчество"
                value={student.patronymic}
                onChange={e => setStudent({...student, patronymic: e.target.value})}
            />
            <MyInput
                type="text"
                placeholder="telegram id"
                value={student.telegramId}
                onChange={e => setStudent({...student, telegramId: e.target.value})}
            />
            <Button className="mt-3" onClick={addNewTeacher}>Добавить</Button>
        </form>
    );
};

export default PostForm;