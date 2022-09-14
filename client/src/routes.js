import {SCHEDULE_ROUTE, TEACHER_ROUTE} from "./utils/consts";
import Schedule from "./pages/Schedule";
import Teacher from "./pages/Teacher";

export const publicRoutes = [
    {path: SCHEDULE_ROUTE, Component: Schedule },
    {path: TEACHER_ROUTE, Component: Teacher },
]