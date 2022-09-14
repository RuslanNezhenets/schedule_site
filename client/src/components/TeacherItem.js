import React from 'react';
import {Card} from "react-bootstrap";
import '../style/main.scss'

const TeacherItem = ({item, onClick}) => {
    return (
        <Card className="teacher" onClick={onClick}>
            <div>Фамилия: {item.surname}</div>
            <div>Имя: {item.name}</div>
            <div>Отчество: {item.patronymic}</div>
            {item.phone ? <div>Телефон: {item.phone}</div> : <div> Телефон: --- </div>}
            {item.email ? <div>Телефон: {item.email}</div> : <div> Телефон: --- </div>}
            {item.telegram ? <div>Телефон: {item.telegram}</div> : <div> Телефон: --- </div>}
        </Card>
    );
};

export default TeacherItem;