import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import TeacherItem from "../components/TeacherItem";
import {observer} from "mobx-react-lite";
import {fetchTeacher} from "../http/scheduleApi";
import {Button} from "react-bootstrap";
import TeacherModal from "../components/UI/Modal/TeacherModal";

const Teacher = observer(() => {
    const {schedule} = useContext(Context)
    const [modalShow, setModalShow] = React.useState(false);
    const [update, setUpdate] = useState(false)
    const [active, setActive] = useState(null)

    useEffect(() => {
        updateTeacher()
    }, [schedule])

    const createTeacher = (newTeacher) => {
        schedule.setTeacher([...schedule.teachers, newTeacher])
        setModalShow(false)
        updateTeacher()
    }

    const updateTeacher = () => {
        fetchTeacher().then(data => schedule.setTeacher(Sort(data, "surname")))
    }

    const Sort = (data, sort) => {
        data = [...data].sort((a, b) => a[sort].toLowerCase() > b[sort].toLowerCase() ? 1 : -1)
        return data
    }


    return (
        <div>
            <TeacherModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                create={createTeacher}
                update={update}
                item={active}
                updateTeacher={updateTeacher}
                setModalShow={setModalShow}
            />
            <div className="items">
                {schedule.teachers.map((teacher, i) =>
                    <TeacherItem
                        key={i}
                        item={teacher}
                        onClick={() => {
                            setUpdate(true)
                            setModalShow(true)
                            setActive(teacher)
                        }}
                    />
                )}
            </div>
            <Button
                className="item-btn"
                onClick={() => {
                    setModalShow(true)
                    setUpdate(false)
                }}
            >
                Добавить преподавателя
            </Button>
        </div>
    );
});

export default Teacher;