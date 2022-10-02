import React, {useContext, useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import MySelectByTitle from "../../UI/Select/MySelectByTitleDiscipline";
import {Context} from "../../../index";
import MySelectType from "../../UI/Select/MeSelectType";
import MySelectByName from "../../UI/Select/MySelectByName";
import {createLesson, createSchedule, createTeacherLesson} from "../../../http/scheduleApi";
import MyInput from "../../UI/MyInput/MyInput";

const PostForm = ({create, activeLesson}) => {
    const {schedule} = useContext(Context)
    const [lesson, setLesson] = useState(
        {week: activeLesson.week, day: activeLesson.day, lessonId: null, timeTableId: activeLesson.time}
    )
    const [error, setError] = useState('')

    const [link, setLink] = useState('')

    const [activeDiscipline, setActiveDiscipline] = useState(schedule.disciplines[0].id)
    const [activeType, setActiveType] = useState(schedule.types[0].id)
    const [activeTeacher, setActiveTeacher] = useState(schedule.teachers[0].id)

    useEffect(() => {
        Sort(schedule.disciplines, "title")
    }, [schedule])

    const Sort = (data, sort) => {
        data = [...data].sort((a, b) => a[sort].toLowerCase() > b[sort].toLowerCase() ? 1 : -1)
        setActiveDiscipline(data[0].id)
        return data
    }

    const addNewScheduleLesson = async (e) => {
        e.preventDefault()

        try {
            const newLesson = await createLesson({disciplineId: activeDiscipline, typeId: activeType})
            await createTeacherLesson({teacherId: activeTeacher, lessonId: newLesson.id, link: link})
            const newScheduleLesson = await createSchedule({...lesson, lessonId: newLesson.id})

            create(newScheduleLesson)
            setLesson({...lesson, lessonId: null})

        } catch (e) {
            setError(e.response.data.message)
        }
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

            <div className="d-flex justify-content-end mt-3">
                <Button onClick={addNewScheduleLesson}>Выбрать</Button>
            </div>
        </form>
    );
};

export default PostForm;