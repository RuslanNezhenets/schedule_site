import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ScheduleStore from "./store/ScheduleStore";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        schedule: new ScheduleStore()
    }}>
        <App/>
    </Context.Provider>
);