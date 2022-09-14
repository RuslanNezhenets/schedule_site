import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import MyInput from "../../UI/MyInput/MyInput";
import {createDiscipline} from "../../../http/scheduleApi";
import MyCheck from "../../UI/MyCheck/MyCheck";

const PostForm = ({create}) => {
    const [discipline, setDiscipline] = useState({title: '', elective: false})
    const [error, setError] = useState('')
    const [isToggle, setIsToggle] = useState(discipline.elective)

    const addNewDiscipline = async (e) => {
        e.preventDefault()

        try {
            await createDiscipline({...discipline, elective: isToggle})
            create(discipline)
            setDiscipline({title: '', elective: false})
        } catch (e) {
            setError(e.response.data.message)
        }
    }

    return (
        <form>
            <div className="error">{error}</div>
            <MyInput
                type="text"
                placeholder="Название дисциплины"
                value={discipline.title}
                onChange={e => setDiscipline({...discipline, title: e.target.value})}
            />
            <MyCheck text={"Выборный"} isToggle={isToggle} onToggle={() => setIsToggle(!isToggle)}/>
            <br/>
            <div className="d-flex justify-content-end">
                <Button onClick={addNewDiscipline}>Добавить</Button>
            </div>
        </form>
    );
};

export default PostForm;