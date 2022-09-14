import React from 'react';
import {Card} from "react-bootstrap";
import '../style/main.scss'

const TeacherItem = ({item, onClick}) => {
    return (
        <Card className="item" onClick={onClick}>
            <div><b>Фамилия:</b> {item.surname}</div>
            <div><b>Имя:</b> {item.name}</div>
            <div><b>Отчество:</b> {item.patronymic}</div>
            {item.phone ? <div><b>Телефон:</b> {item.phone}</div> : <div><b>Телефон:</b> --- </div>}
            {item.email ? <div><b>Почта:</b> {item.email}</div> : <div><b>Почта:</b> --- </div>}
            {item.telegram ? <div><b>Телеграм:</b> {item.telegram}</div> : <div><b>Телефон:</b> --- </div>}
        </Card>
    );
};

export default TeacherItem;