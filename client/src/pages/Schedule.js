import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {
    fetchDiscipline,
    fetchLesson,
    fetchSchedule,
    fetchTeacher,
    fetchTeacherLesson,
    fetchType
} from "../http/scheduleApi";
import {observer} from "mobx-react-lite";
import ScheduleTable from "../components/ScheduleTable";
import MyCheck from "../components/UI/MyCheck/MyCheck";

const Schedule = observer(() => {
    const {schedule} = useContext(Context)
    const [isToggle, setIsToggle] = useState(false)
    const [week, setWeek] = useState(1)

    useEffect(() => {
        fetchSchedule().then(data => schedule.setSchedule(data))
        fetchLesson().then(data => schedule.setLesson(data))
        fetchDiscipline().then(data => schedule.setDiscipline(data))
        fetchType().then(data => schedule.setType(data))
        fetchTeacherLesson().then(data => schedule.setTeacherLesson(data))
        fetchTeacher().then(data => schedule.setTeacher(data))
    }, [schedule])

    useEffect( () => {
        let table = []
        for (let i = 1; i <= 6; i++) {
            let row = []
            for (let j = 1; j <= 5; j++) {
                row.push(schedule.Lesson(week, j, i))
            }
            table.push(row)
        }
        schedule.setTable(table)
    }, [schedule.schedules, week])

    return (
        <div>
            <div className="text-center">Розклад занять для ІС-02</div>
            <div className="d-flex justify-content-center align-items-center">
                <p className="mt-4 me-3">Первая неделя</p>
                <MyCheck isToggle={isToggle} onToggle={() => {
                    setIsToggle(!isToggle)
                    week === 1 ? setWeek(2) : setWeek(1)
                    }}/>
                <p className="mt-4">Вторая неделя</p>
            </div>
            <ScheduleTable week={week}/>
        </div>
    );
});

export default Schedule;