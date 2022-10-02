import React, {useContext, useEffect, useState} from 'react';
import MySelectByName from "../components/UI/Select/MySelectByName";
import {Context} from "../index";
import {fetchDiscipline, fetchElective, fetchStudent} from "../http/scheduleApi";
import {Button} from "react-bootstrap";
import ElectiveModal from "../components/UI/Modal/ElectiveModal";
import {observer} from "mobx-react-lite";
import ElectiveItem from "../components/ElectiveItem";

const Elective = observer(() => {
    const {schedule} = useContext(Context)
    const [students, setStudents] = useState([])
    const [activeStudent, setActiveStudent] = useState(0)
    const [modalShow, setModalShow] = useState(false);
    const [update, setUpdate] = useState(false)
    const [active, setActive] = useState(null)

    useEffect(() => {
        UpdateElective()
    }, [])

    useEffect(() => {
        fetchDiscipline().then(data => schedule.setDiscipline(data))
        fetchStudent().then(data => setStudents(Sort(data, "surname")))
    }, [activeStudent])

    const UpdateElective = () => {
        fetchElective().then(data => schedule.setElective(data))
    }

    const Sort = (data, sort) => {
        data = [...data].sort((a, b) => a[sort].toLowerCase() > b[sort].toLowerCase() ? 1 : -1)
        if (!activeStudent)
            setActiveStudent(data[0].id)
        return data
    }


    const createElective = (newElective) => {
        schedule.setElective([...schedule.electives, newElective])
        setModalShow(false)
        UpdateElective()
    }

    return (
        <div>
            <ElectiveModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                create={createElective}
                update={update}
                item={active}
                UpdateElective={UpdateElective}
                setModalShow={setModalShow}
                activeStudent={activeStudent}
            />
            <div className="mb-2"><b>Выберите студента:</b></div>
            <MySelectByName
                options={students}
                value={activeStudent}
                onChange={student => {
                    setActiveStudent(student)
                    UpdateElective()
                }}
            />

            <div className="items-three">
                {schedule.electives.filter(item => item.studentId == activeStudent).map((elective, i) =>
                    <ElectiveItem
                        key={i}
                        item={elective}
                        onClick={() => {
                            setUpdate(true)
                            setModalShow(true)
                            setActive(elective)
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
                Выбрать предмет
            </Button>
        </div>
    );
});

export default Elective;