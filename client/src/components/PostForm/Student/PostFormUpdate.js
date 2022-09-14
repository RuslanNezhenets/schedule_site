import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import MyInput from "../../UI/MyInput/MyInput";
import {deleteStudent, updateStudent} from "../../../http/scheduleApi";

const PostFormUpdate = ({item, updateItem, setModalShow}) => {
    const [error, setError] = useState('')
    const [student, setStudent] = useState(item)

    const UpdateTeacher = async (e) => {
        e.preventDefault()

        try {
            await updateStudent(student)
            setStudent({surname: "", name: "", patronymic: "", telegramId: "", id: null})
            updateItem()
            setModalShow(false)
        } catch (e) {
            setError(e.response.data.message)
        }
    }

    const DeleteTeacher = async (e) => {
        e.preventDefault()

        await deleteStudent(student.id)
        setStudent({surname: "", name: "", patronymic: "", telegramId: "", id: null})
        updateItem()
        setModalShow(false)
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
                placeholder="telegram"
                value={student.telegramId ? student.telegramId : ""}
                onChange={e => setStudent({...student, telegramId: e.target.value})}
            />
            <div className="d-flex justify-content-between">
                <Button className="mt-3" onClick={UpdateTeacher}>Сохранить</Button>
                <Button className="mt-3" variant="danger" onClick={DeleteTeacher}>Удалить</Button>
            </div>
        </form>
    );
};

export default PostFormUpdate;