import React from 'react';
import {Card} from "react-bootstrap";
import '../style/main.scss'

const StudentItem = ({item, onClick}) => {
    return (
        <Card className="teacher" onClick={onClick}>
            <div>Фамилия: {item.surname}</div>
            <div>Имя: {item.name}</div>
            <div>Отчество: {item.patronymic}</div>
            {item.telegramId ? <div>Телеграм: {item.telegramId}</div> : <div> Телеграм: --- </div>}
        </Card>
    );
};

export default StudentItem;