import React, {useContext, useEffect, useState} from 'react';
import "../style/main.scss"
import {Context} from "../index";

const Lesson = ({item}) => {
    const {schedule} = useContext(Context)
    //const [lesson, setLesson] = useState(null)
    const [discipline, setDiscipline] = useState(null)
    const [type, setType] = useState(null)
    //const [Link, setLink] = useState("")
    const [teacher, setTeacher] = useState(null)

    useEffect(() => {
        const Lesson = schedule.searchLesson(item.lessonId)
        //setLesson(Lesson)
        const Discipline = schedule.searchDiscipline(Lesson.disciplineId)
        setDiscipline(Discipline)
        const Type = schedule.searchType(Lesson.typeId)
        setType(Type)
        //const Link = schedule.searchLink(Lesson.id)
        //if(Link) setLink(Link)
        const Teacher = schedule.searchTeacher(Lesson.id)
        if(Teacher) setTeacher(Teacher)
    }, [item.lessonId, schedule])

    return (
        <div className="lesson">
            <div className="lesson__type">{type && type.title.substr(0, 3)}</div>
            <div className="lesson__title">{discipline && discipline.title}</div>
            <div className="lesson__teacher">
                {teacher ? teacher.surname + " " + teacher.name + " " + teacher.patronymic : <div>Не назначен</div>}
            </div>
        </div>
    );
};

export default Lesson;