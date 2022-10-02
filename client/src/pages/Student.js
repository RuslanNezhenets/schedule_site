import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {fetchStudent} from "../http/scheduleApi";
import {Button} from "react-bootstrap";
import StudentModal from "../components/UI/Modal/StudentModal";
import StudentItem from "../components/StudentItem";

const Student = observer(() => {
    const {schedule} = useContext(Context)
    const [modalShow, setModalShow] = React.useState(false);
    const [update, setUpdate] = useState(false)
    const [active, setActive] = useState(null)

    useEffect(() => {
        updateStudent()
    }, [schedule])

    const createStudent = (newStudent) => {
        schedule.setStudent([...schedule.students, newStudent])
        setModalShow(false)
        updateStudent()
    }

    const updateStudent = () => {
        fetchStudent().then(data => schedule.setStudent(Sort(data, "surname")))
    }

    const Sort = (data, sort) => {
        data = [...data].sort((a, b) => a[sort].toLowerCase() > b[sort].toLowerCase() ? 1 : -1)
        return data
    }

    return (
        <div>
            <StudentModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                create={createStudent}
                update={update}
                item={active}
                updateStudent={updateStudent}
                setModalShow={setModalShow}
            />
            <div className="items">
                {schedule.students.map((student, i) =>
                    <StudentItem
                        key={i}
                        item={student}
                        onClick={() => {
                            setUpdate(true)
                            setModalShow(true)
                            setActive(student)
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
                Добавить студента
            </Button>
        </div>
    );
});

export default Student;