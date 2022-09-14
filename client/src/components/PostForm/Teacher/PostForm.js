import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import MyInput from "../../UI/MyInput/MyInput";
import {createTeacher} from "../../../http/scheduleApi";

const PostForm = ({create}) => {
    const [teacher, setTeacher] = useState(
        {surname: '', name: '', patronymic: '', phone: '', email: '', telegram: ''}
    )
    const [error, setError] = useState('')

    const addNewTeacher = async (e) => {
        e.preventDefault()

        try {
            await createTeacher(teacher)
            create(teacher)
            setTeacher({surname: '', name: '', patronymic: '', phone: '', email: '', telegram: ''})
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
                value={teacher.surname}
                onChange={e => setTeacher({...teacher, surname: e.target.value})}
            />
            <MyInput
                type="text"
                placeholder="Имя"
                value={teacher.name}
                onChange={e => setTeacher({...teacher, name: e.target.value})}
            />
            <MyInput
                type="text"
                placeholder="Отчество"
                value={teacher.patronymic}
                onChange={e => setTeacher({...teacher, patronymic: e.target.value})}
            />
            <MyInput
                type="text"
                placeholder="Телефон"
                value={teacher.phone}
                onChange={e => setTeacher({...teacher, phone: e.target.value})}
            />
            <MyInput
                type="text"
                placeholder="email"
                value={teacher.email}
                onChange={e => setTeacher({...teacher, email: e.target.value})}
            />
            <MyInput
                type="text"
                placeholder="telegram"
                value={teacher.telegram}
                onChange={e => setTeacher({...teacher, telegram: e.target.value})}
            />
            <Button className="mt-3" onClick={addNewTeacher}>Добавить</Button>
        </form>
    );
};

export default PostForm;