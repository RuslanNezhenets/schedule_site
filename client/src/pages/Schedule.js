import React, {useContext, useEffect} from 'react';
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

const Schedule = observer(() => {
    const {schedule} = useContext(Context)

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
                row.push(schedule.Lesson(1, j, i))
            }
            table.push(row)
        }
        schedule.setTable(table)
    }, [schedule.schedules])

    return (
        <div>
            <div className="text-center">Розклад занять для ІС-02</div>
            <div className="text-center">Перший тиждень</div>
            <ScheduleTable/>
        </div>
    );
});

export default Schedule;