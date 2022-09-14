import React from 'react';
import {Route, Routes} from "react-router-dom";
import Schedule from "../pages/Schedule";
import {publicRoutes} from "../routes";

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(route =>
                <Route key={route.path} path={route.path} element={<route.Component/>}/>
            )}
            <Route path="*" element={<Schedule/>}/>
        </Routes>
    );
};

export default AppRouter;