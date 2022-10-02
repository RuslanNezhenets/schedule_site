import React, {useContext, useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import {deleteLesson, deleteSchedule, updateLesson} from "../../../http/scheduleApi";
import MySelectByTitle from "../../UI/Select/MySelectByTitleDiscipline";
import {Context} from "../../../index";
import MySelectType from "../../UI/Select/MeSelectType";
import MySelectByName from "../../UI/Select/MySelectByName";
import MyInput from "../../UI/MyInput/MyInput";
import {updateTeacherLesson} from "../../../http/scheduleApi";

const PostFormUpdate = ({item, updateItem, setModalShow}) => {
    const {schedule} = useContext(Context)
    const [error, setError] = useState('')
    const [lesson, setLesson] = useState(schedule.searchLesson(item.lessonId))

    const [activeDiscipline, setActiveDiscipline] = useState()
    const [activeType, setActiveType] = useState(undefined)
    const [activeTeacher, setActiveTeacher] = useState(undefined)
    const [link, setLink] = useState('')

    useEffect(() => {
        Sort(schedule.disciplines, "title")

        setActiveType(lesson.typeId)
        if(schedule.searchTeacherForLesson(lesson.id))
            setActiveTeacher(schedule.searchTeacherForLesson(lesson.id).id)
        setLink(schedule.searchLink(lesson.id))
    }, [schedule, lesson.id, lesson.typeId])

    const Sort = (data, sort) => {
        data = [...data].sort((a, b) => a[sort] > b[sort] ? 1 : -1)
        setActiveDiscipline(lesson.disciplineId)
        return data
    }

    const UpdateScheduleLesson = async (e) => {
        e.preventDefault()

        try {
            await updateLesson({disciplineId: activeDiscipline, typeId: activeType, id: lesson.id})
            await updateTeacherLesson(
                {teacherId: activeTeacher, lessonId: lesson.id, link: link,
                    id: schedule.searchTeacherLesson(lesson.id).id})

            setLesson({disciplineId: activeDiscipline, typeId: activeType, id: lesson.id})
            updateItem()
            setModalShow(false)
        } catch (e) {
            setError(e.response.data.message)
        }
    }

    const DeleteScheduleLesson = async (e) => {
        e.preventDefault()

        await deleteLesson(item.lessonId)
        await deleteSchedule(item.id)

        setLesson(item)
        updateItem()
        setModalShow(false)
    }

    return (
        <form>
            <div className="error">{error}</div>
            <div className="mb-2"><b>Выберите дисциплину:</b></div>
            <MySelectByTitle
                options={schedule.disciplines}
                value={activeDiscipline}
                onChange={discipline => setActiveDiscipline(discipline)}
            />

            <div className="mt-3 mb-2"><b>Выберите тип пары:</b></div>
            <MySelectType
                options={schedule.types}
                value={activeType}
                onChange={type => setActiveType(type)}
            />

            <div className="mt-3 mb-2"><b>Выберите преподавателя:</b></div>
            <MySelectByName
                options={schedule.teachers}
                value={activeTeacher}
                onChange={teacher => setActiveTeacher(teacher)}
                patronymic={true}
            />

            <div className="mt-3 mb-2"><b>Ссылка на пару (не обязательно):</b></div>
            <MyInput
                type="text"
                placeholder="Вставьте ссылку"
                value={link}
                onChange={e => setLink(e.target.value)}
            />

            <div className="d-flex justify-content-between">
                <Button className="mt-3" onClick={UpdateScheduleLesson}>Сохранить</Button>
                <Button className="mt-3" variant="danger" onClick={DeleteScheduleLesson}>Удалить</Button>
            </div>
        </form>
    );
};

export default PostFormUpdate;