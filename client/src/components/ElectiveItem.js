import React, {useContext} from 'react';
import {Card} from "react-bootstrap";
import '../style/main.scss'
import {Context} from "../index";

const ElectiveItem = ({item, onClick}) => {
    const {schedule} = useContext(Context)

    return (
        <Card className="item" onClick={onClick}>
            <div><b>Название дисциплины: </b>
                {schedule.disciplines.filter(discipline => discipline.id === item.disciplineId)[0].title}
            </div>
        </Card>
    );
};

export default ElectiveItem;