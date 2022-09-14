import React, {useContext} from 'react';
import {Context} from "../index";
import Lesson from "./Lesson";
import {observer} from "mobx-react-lite";
import {Card} from "react-bootstrap";

const ScheduleTable = observer(() => {
    const {schedule} = useContext(Context)

    return (
        <div className="schedule">
            {schedule.table.map(row => {
                return (
                    row.map((lessons, i) => {
                        return (
                            lessons[0] ?
                                <Card key={i} className="m-1">
                                    {lessons.map((lesson, j) => {
                                        return (lesson ? <Lesson key={j} item={lesson}/> :
                                            <Card className="w-100 h-100"></Card>)
                                    })}
                                </Card>
                                :
                                <Card className="m-1"></Card>
                        )
                    })
                )
            })}
        </div>
    );
});

export default ScheduleTable;