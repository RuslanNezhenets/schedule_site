import React from 'react';
import {Card} from "react-bootstrap";
import '../style/main.scss'

const StudentItem = ({item, onClick}) => {
    return (
        <Card className="item" onClick={onClick}>
            <div><b>Название:</b> {item.title}</div>
            <div><b>Выборный:</b> {item.elective ? <span>Да</span> : <span>Нет</span>}</div>
        </Card>
    );
};

export default StudentItem;