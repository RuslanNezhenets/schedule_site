import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {fetchDiscipline, fetchStudent} from "../http/scheduleApi";
import {Button} from "react-bootstrap";
import DisciplineModal from "../components/UI/Modal/DisciplineModal";
import DisciplineItem from "../components/DisciplineItem";

const Discipline = observer(() => {
    const {schedule} = useContext(Context)
    const [modalShow, setModalShow] = React.useState(false);
    const [update, setUpdate] = useState(false)
    const [active, setActive] = useState(null)

    useEffect(() => {
        updateDiscipline()
    }, [schedule])

    const createDiscipline = (newDiscipline) => {
        schedule.setStudent([...schedule.students, newDiscipline])
        setModalShow(false)
        updateDiscipline()
    }

    const updateDiscipline = () => {
        fetchDiscipline().then(data => schedule.setDiscipline(Sort(data, "title")))
    }

    const Sort = (data, sort) => {
        data = [...data].sort((a, b) => a[sort].toLowerCase() > b[sort].toLowerCase() ? 1 : -1)
        return data
    }

    return (
        <div>
            <DisciplineModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                create={createDiscipline}
                update={update}
                item={active}
                updateDiscipline={updateDiscipline}
                setModalShow={setModalShow}
            />
            <div className="items">
                {schedule.disciplines.map((discipline, i) =>
                    <DisciplineItem
                        key={i}
                        item={discipline}
                        onClick={() => {
                            setUpdate(true)
                            setModalShow(true)
                            setActive(discipline)
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
                Добавить дисциплину
            </Button>
        </div>
    );
});

export default Discipline;