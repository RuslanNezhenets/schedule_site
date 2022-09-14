import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import MyInput from "../../UI/MyInput/MyInput";
import {deleteDiscipline, updateDiscipline} from "../../../http/scheduleApi";
import MyCheck from "../../UI/MyCheck/MyCheck";

const PostFormUpdate = ({item, updateItem, setModalShow}) => {
    const [error, setError] = useState('')
    const [discipline, setDiscipline] = useState(item)
    const [isToggle, setIsToggle] = useState(discipline.elective)

    const UpdateDiscipline = async (e) => {
        e.preventDefault()

        try {
            await updateDiscipline({...discipline, elective: isToggle})
            setDiscipline({title: "", elective: false, id: null})
            updateItem()
            setModalShow(false)
        } catch (e) {
            setError(e.response.data.message)
        }
    }

    const DeleteDiscipline = async (e) => {
        e.preventDefault()

        await deleteDiscipline(discipline.id)
        setDiscipline({title: "", elective: false, id: null})
        updateItem()
        setModalShow(false)
    }


    return (
        <form className="text-end">
            <div className="error">{error}</div>
            <MyInput
                type="text"
                placeholder="Фамилия"
                value={discipline.title}
                onChange={e => setDiscipline({...discipline, title: e.target.value})}
            />
            <MyCheck text={"Выборный"} isToggle={isToggle} onToggle={() => setIsToggle(!isToggle)}/>
            <br/>
            <div className="d-flex justify-content-between">
                <Button className="mt-3" onClick={UpdateDiscipline}>Сохранить</Button>
                <Button className="mt-3" variant="danger" onClick={DeleteDiscipline}>Удалить</Button>
            </div>
        </form>
    );
};

export default PostFormUpdate;