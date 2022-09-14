import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import MyInput from "../../UI/MyInput/MyInput";
import {deleteTeacher, updateTeacher} from "../../../http/scheduleApi";

const PostFormUpdate = ({item, updateItem, setModalShow}) => {
    const [error, setError] = useState('')
    const [teacher, setTeacher] = useState(item)

    const UpdateTeacher = async (e) => {
        e.preventDefault()

        try {
            if (!teacher.phone) teacher.phone = null
            if (!teacher.email) teacher.email = null
            if (!teacher.telegram) teacher.telegram = null
            console.log(item)
            console.log(teacher);
            await updateTeacher(teacher)
            setTeacher({surname: "", name: "", patronymic: "", phone: null, email: null, telegram: null, id: null})
            updateItem()
            setModalShow(false)
        } catch (e) {
            setError(e.response.data.message)
        }
    }

    const DeleteTeacher = async (e) => {
        e.preventDefault()

        await deleteTeacher(teacher.id)
        setTeacher({surname: "", name: "", patronymic: "", phone: null, email: null, telegram: null, id: null})
        updateItem()
        setModalShow(false)
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
                value={teacher.phone ? teacher.phone : ""}
                onChange={e => setTeacher({...teacher, phone: e.target.value})}
            />
            <MyInput
                type="text"
                placeholder="email"
                value={teacher.email ? teacher.email : ""}
                onChange={e => setTeacher({...teacher, email: e.target.value})}
            />
            <MyInput
                type="text"
                placeholder="telegram"
                value={teacher.telegram ? teacher.telegram : ""}
                onChange={e => setTeacher({...teacher, telegram: e.target.value})}
            />
            <div className="d-flex justify-content-between">
                <Button className="mt-3" onClick={UpdateTeacher}>Сохранить</Button>
                <Button className="mt-3" variant="danger" onClick={DeleteTeacher}>Удалить</Button>
            </div>
        </form>
    );
};

export default PostFormUpdate;