import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import Lesson from "./Lesson";
import {observer} from "mobx-react-lite";
import {Card} from "react-bootstrap";
import ScheduleModal from "./UI/Modal/ScheduleModal";
import {fetchLesson, fetchSchedule, fetchTeacherLesson} from "../http/scheduleApi";

const ScheduleTable = observer(() => {
    const {schedule} = useContext(Context)
    const [modalShow, setModalShow] = useState(false);
    const [update, setUpdate] = useState(false)
    const [active, setActive] = useState(null)
    const [activeLesson, setActiveLesson] = useState({week: 1, day: 1, time: 1})

    useEffect(() => {
        UpdateSchedule()
    }, [schedule])

    const UpdateSchedule = () => {
        fetchLesson().then(data => {console.log(data)
            schedule.setLesson(data)})
        fetchSchedule().then(data => schedule.setSchedule(data))
        fetchTeacherLesson().then(data => schedule.setTeacherLesson(data))
        schedule.setTable([[]])
    }

    const createLesson = (newLesson) => {
        schedule.setSchedule([...schedule.schedules, newLesson])
        setModalShow(false)
        UpdateSchedule()
    }


    return (
        <div className="schedule">
            <ScheduleModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                create={createLesson}
                update={update}
                item={active}
                UpdateSchedule={UpdateSchedule}
                setModalShow={setModalShow}
                activeLesson={activeLesson}
            />

            {schedule.table.map((row, time) => {
                return (
                    row.map((lessons, day) => {
                        return (
                            lessons[0] ?
                                <Card key={day} className="m-1">
                                    {lessons.map((lesson, j) => {
                                        return (lesson ? <Lesson
                                                key={j}
                                                item={lesson}
                                                onClick={() => {
                                                    setUpdate(true)
                                                    setModalShow(true)
                                                    setActive(lesson)
                                                    setActiveLesson({week: 1, day: day + 1, time: time + 1})
                                                }}/> :
                                            <Card className="w-100 h-100"></Card>)
                                    })}
                                    <button
                                        type="button"
                                        className="mt-3 btn btn-primary"
                                        style={{width: "50%", margin: "auto", marginBottom: 10}}
                                        onClick={() => {
                                            setUpdate(false)
                                            setModalShow(true)
                                            setActiveLesson({week: 1, day: day + 1, time: time + 1})
                                        }}
                                    >
                                        Добавить
                                    </button>
                                </Card>
                                :
                                <div
                                    className="m-1"
                                    style={{border: "1px solid grey"}}
                                    onClick={() => {
                                        setUpdate(false)
                                        setModalShow(true)
                                        setActiveLesson({week: 1, day: day + 1, time: time + 1})
                                    }}
                                />
                        )
                    })
                )
            })}
        </div>
    );
});

export default ScheduleTable;