import React from 'react';
import {Modal} from "react-bootstrap";
import PostForm from "../../PostForm/Schedule/PostForm";
import PostFormUpdate from "../../PostForm/Schedule/PostFormUpdate";

const ScheduleModal = ({show, onHide, create, update, item, UpdateSchedule, setModalShow, activeLesson}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Выберите выборный предмет
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {update
                    ?
                    <PostFormUpdate item={item} updateItem={UpdateSchedule} setModalShow={setModalShow}/>
                    :
                    <PostForm create={create} activeLesson={activeLesson} updateItem={UpdateSchedule}/>
                }
            </Modal.Body>
        </Modal>
    );
};

export default ScheduleModal;