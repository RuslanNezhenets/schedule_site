import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {DISCIPLINE_ROUTE, ELECTIVE_ROUTE, SCHEDULE_ROUTE, STUDENT_ROUTE, TEACHER_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate()

    return (
        <Navbar bg="dark" variant="dark" className="navbar">
            <Container>
                <Navbar.Brand onClick={() => navigate(SCHEDULE_ROUTE)}>Расписание</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={() => navigate(TEACHER_ROUTE)}>Преподаватели</Nav.Link>
                    <Nav.Link onClick={() => navigate(STUDENT_ROUTE)}>Студенты</Nav.Link>
                    <Nav.Link onClick={() => navigate(DISCIPLINE_ROUTE)}>Дисциплины</Nav.Link>
                    <Nav.Link onClick={() => navigate(ELECTIVE_ROUTE)}>Выборные дисциплины</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;