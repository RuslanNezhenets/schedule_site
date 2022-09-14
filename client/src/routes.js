import {DISCIPLINE_ROUTE, SCHEDULE_ROUTE, STUDENT_ROUTE, TEACHER_ROUTE} from "./utils/consts";
import Schedule from "./pages/Schedule";
import Teacher from "./pages/Teacher";
import Student from "./pages/Student";
import Discipline from "./pages/Discipline";

export const publicRoutes = [
    {path: SCHEDULE_ROUTE, Component: Schedule },
    {path: TEACHER_ROUTE, Component: Teacher },
    {path: STUDENT_ROUTE, Component: Student },
    {path: DISCIPLINE_ROUTE, Component: Discipline},
]