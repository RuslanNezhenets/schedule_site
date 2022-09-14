import React from 'react';
import cl from './MyCheck.module.css'

const MyCheck = ({text, isToggle, onToggle}) => {
    return (
        <div className="d-flex align-items-center mt-3">
            <label className={cl.switch}>
                <input type="checkbox" id="togBtn" checked={isToggle} onChange={onToggle}/>
                <span className={cl.slider}></span>
            </label>
            <div>{text}</div>
        </div>
    );
};

export default MyCheck;