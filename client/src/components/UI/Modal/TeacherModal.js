import React from 'react';
import {Modal} from "react-bootstrap";
import PostForm from "../../PostForm/Teacher/PostForm";
import PostFormUpdate from "../../PostForm/Teacher/PostFormUpdate";

const TeacherModal = ({show, onHide, create, update, item, updateTeacher, setModalShow}) => {
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
                    Заполните информацию о преподавателе
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {update
                    ?
                    <PostFormUpdate item={item} updateItem={updateTeacher} setModalShow={setModalShow}/>
                    :
                    <PostForm create={create}/>
                }
            </Modal.Body>
        </Modal>
    );
};

export default TeacherModal;