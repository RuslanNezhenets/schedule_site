import React, {useContext, useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import {createElective, fetchDiscipline} from "../../../http/scheduleApi";
import MySelectByTitle from "../../UI/Select/MySelectByTitle";
import {Context} from "../../../index";

const PostForm = ({create, activeStudent, updateItem}) => {
    const {schedule} = useContext(Context)
    const [elective, setElective] = useState({studentId: null, disciplineId: null})
    const [error, setError] = useState('')
    const [disciplines, setDisciplines] = useState([])
    const [activeDiscipline, setActiveDiscipline] = useState({})

    useEffect(() => {
        fetchDiscipline().then(data => setDisciplines(
            Sort(data.filter(discipline => discipline.elective === true)), "title")
        )
    }, [schedule])

    const Sort = (data, sort) => {
        data = [...data].sort((a, b) => a[sort] > b[sort] ? 1 : -1)
        setActiveDiscipline(data[0].id)
        return data
    }

    const addNewElective = async (e) => {
        e.preventDefault()

        try {
            await createElective({studentId: activeStudent, disciplineId: activeDiscipline})
            create(elective)
            setElective({studentId: null, disciplineId: null})
            updateItem()
        } catch (e) {
            setError(e.response.data.message)
        }
    }

    return (
        <form>
            <div className="error">{error}</div>
            <div className="mb-2"><b>Выберите дисциплину:</b></div>
            <MySelectByTitle
                defaultValue="Выберите дисциплину"
                options={disciplines}
                value={activeDiscipline}
                onChange={discipline => setActiveDiscipline(discipline)}
            />
            <div className="d-flex justify-content-end mt-3">
                <Button onClick={addNewElective}>Выбрать</Button>
            </div>
        </form>
    );
};

export default PostForm;