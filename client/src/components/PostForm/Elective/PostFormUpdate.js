import React, {useContext, useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import {deleteElective, updateElective} from "../../../http/scheduleApi";
import {Context} from "../../../index";
import MySelectByTitleDiscipline from "../../UI/Select/MySelectByTitleDiscipline";

const PostFormUpdate = ({item, updateItem, setModalShow}) => {
    const {schedule} = useContext(Context)
    const [error, setError] = useState('')
    const [elective, setElective] = useState(item)
    const [disciplines, setDisciplines] = useState([])
    const [activeDiscipline, setActiveDiscipline] = useState(undefined)

    useEffect(() => {
        setDisciplines(Sort(schedule.disciplines.filter(discipline => discipline.elective === true)), "title")
    }, [schedule])

    const Sort = (data, sort) => {
        data = [...data].sort((a, b) => a[sort] > b[sort] ? 1 : -1)
        setActiveDiscipline(elective.disciplineId)
        return data
    }

    const UpdateElective = async (e) => {
        e.preventDefault()

        try {
            await updateElective({...elective, disciplineId: activeDiscipline})
            setElective({studentId: null, disciplineId: null, id: null})
            updateItem()
            setModalShow(false)
        } catch (e) {
            setError(e.response.data.message)
        }
    }

    const DeleteElective = async (e) => {
        e.preventDefault()

        await deleteElective(elective.id)
        setElective({title: "", elective: false, id: null})
        updateItem()
        setModalShow(false)
    }

    return (
        <form>
            <div className="error">{error}</div>
            <div className="mb-2"><b>Выберите дисциплину:</b></div>
            <MySelectByTitleDiscipline
                options={disciplines}
                value={activeDiscipline}
                onChange={discipline => setActiveDiscipline(discipline)}
            />
            <div className="d-flex justify-content-between">
                <Button className="mt-3" onClick={UpdateElective}>Сохранить</Button>
                <Button className="mt-3" variant="danger" onClick={DeleteElective}>Удалить</Button>
            </div>
        </form>
    );
};

export default PostFormUpdate;