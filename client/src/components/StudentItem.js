import React from 'react';
import {Card} from "react-bootstrap";
import '../style/main.scss'

const StudentItem = ({item, onClick}) => {
    return (
        <Card className="item" onClick={onClick}>
            <div><b>Фамилия:</b> {item.surname}</div>
            <div><b>Имя:</b> {item.name}</div>
            <div><b>Отчество:</b> {item.patronymic}</div>
            {item.telegramId ? <div><b>Телеграм:</b> {item.telegramId}</div> : <div> Телеграм: --- </div>}
        </Card>
    );
};

export default StudentItem;